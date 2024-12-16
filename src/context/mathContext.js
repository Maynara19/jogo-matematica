import { createContext, useReducer } from "react";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";

export const CartContext = createContext({
  session: null,
  sessionLoading: false,
  sessionError: "",
  handleSignUp: () => {},
  handleSignIn: () => {},
  handleLogout: () => {},
});

  
export default function CartContextProvider({ children }) {
  // FETCH DATA
  const [session, setSession] = useState(null);
  const [sessionLoading, setSessionLoading] = useState(false);
  const [sessionError, setSessionError] = useState(null);

  useEffect(() => {

    // User Session

    // Verifica a sessão ativa
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
      }
    );

    // Cleanup da inscrição
    return () => subscription.subscription.unsubscribe();

    // async function fetchProducts() {
    //   setLoading(true);
    //   const response = await fetch(
    //     "https://dummyjson.com/products/category/fragrances?limit=12&select=id,thumbnail,title,price,description"
    //   );
    //   if (!response.ok) {
    //     setError("Fetching products failed!");
    //   } else {
    //     const result = await response.json();
    //     setProducts(result.products);
    //   }
    //   setTimeout(() => {
    //     setLoading(false);
    //   }, 2000);
    // }

    // fetchProducts();
  }, []);
  
  const handleSignUp = async (firstName, lastName, email, password) => {
    setSessionLoading(true);
    setSessionError(null);
    const { data } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    });

    if (data && data.user) {
      // Check if the user got created
      if (data.user.identities && data.user.identities?.length > 0) {
        // success
        alert(
          "Signed Up! Check and verify your email to confirm subscription!"
        );
      } else {
        // failed, the email address is taken
        setSessionError("E-mail already taken. Try to log in!");
      }
    }
    setSessionLoading(false);
  };

  const handleSignIn = async (email, password) => {
    setSessionLoading(true);
    setSessionError(null);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setSessionLoading(false);
    if (error) setSessionError(error.message);
  };

  function handleLogout() {
    setSession(null);
  }

  const ctx = {
    session: session,
    sessionLoading: sessionLoading,
    sessionError: sessionError,
    handleSignUp: handleSignUp,
    handleSignIn: handleSignIn,
    handleLogout: handleLogout,
  };

  return 
  <CartContext.Provider value={ctx}>{children}</CartContext.Provider>;
}