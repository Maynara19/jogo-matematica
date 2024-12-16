// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Continent1 from './components/Continent1';  // Exemplo de importação
import Continent2 from './components/Continent2';
import Continent3 from './components/Continent3';
import Continent4 from './components/Continent4';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continent1" element={<Continent1 />} />
        <Route path="/continent2" element={<Continent2 />} />
        <Route path="/continent3" element={<Continent3 />} />
        <Route path="/continent4" element={<Continent4 />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
