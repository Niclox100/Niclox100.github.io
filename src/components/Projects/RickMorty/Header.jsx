import React from 'react';
import "../../../assets/styles/components/projects/RickMorty/Header.css"
import { Link } from 'react-router-dom';


const Header = () => {
  
  return (
    <>
      <div id="header" className="header">
        <h1>Rick and Morty Characters</h1>

      </div>
      <Link to="/portafolio" className="header-back">Volver a la Pagina Principal</Link>
    </>
  )}
          
export default Header;