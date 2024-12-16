import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export function Menu() {
  return (
    <div className='menu-container'>
      <h1 id="oi">Matemáticos</h1>
      <div className='button-container'>
        <Link to="/">
          <button className='menu-button'>
            Jogar
          </button>
        </Link>
        <Link to="/sobre">
          <button className='menu-button'>
            Sobre Nós
          </button>
        </Link>
        
      </div>
    </div>
    
  );
}

export default Menu;
