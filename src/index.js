import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Continent1 from './components/Continent1';  // Exemplo de importação
import Continent2 from './components/Continent2';
import Continent3 from './components/Continent3';
import Continent4 from './components/Continent4';
import Menu from './components/Menu.js';
import Sobre from './components/Sobre_nos.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes><Route path="/" element={<Menu />} />
        <Route path="/menu" element={<Home />} />
        <Route path="/continent1" element={<Continent1 />} />
        <Route path="/continent2" element={<Continent2 />} />
        <Route path="/continent3" element={<Continent3 />} />
        <Route path="/continent4" element={<Continent4 />} />
        
        <Route path='/sobre' element={<Sobre/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals()