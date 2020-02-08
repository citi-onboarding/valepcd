import React from 'react';
import './Navbar.scss';
import Logotipo from '../../assets/Navbar/Logotipo.png';
import Facebook from '../../assets/Navbar/facebook-logo.svg';
import Instagram from '../../assets/Navbar/instagram.svg';
import SocialNetworkSvg from '../../assets/Navbar/Caminho_98.svg';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className="nav-image" src={Logotipo} alt="" />
      </div>
      <ul className="navbar-menu">
        <li>Quem somos?</li>
        <li>Relatos</li>
        <li>Contatos</li>
      </ul>
      <div className="navbar-social-network-container">
        <img className="svg-image" src={SocialNetworkSvg} alt="" />
        <ul className="navbar-social-network">
          <li>
            <img className="social-icon" src={Facebook} alt="Link para o facebook do vale pcd" />
          </li>
          <li>
            <img className="social-icon" src={Instagram} alt="Link para o instagram do vale pcd" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
