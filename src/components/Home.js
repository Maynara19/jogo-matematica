// src/components/Home.js
import { Link } from 'react-router-dom';  // Importando o Link
import "./Styles.css";
import "./Menu.css";

export default function Home() {
   return (
    <div className="game"> {/* 'className' no lugar de 'class' em JSX */}
        <h1 id="oi">Matemáticos</h1>
        <div className="map">
            <Link to="/continent1" className="continent" id="continent1">1. Multiplicação</Link>
            <Link to="/continent2" className="continent" id="continent2">2. Divisão</Link>
            <Link to="/continent3" className="continent" id="continent3">3. Álgebra</Link>
            <Link to="/continent4" className="continent" id="continent4">4. Subtração</Link>
        </div>
        <Link to="/" id="back-to-menu" className="menu-button">Voltar para o Menu</Link>
    </div>
   );
}
