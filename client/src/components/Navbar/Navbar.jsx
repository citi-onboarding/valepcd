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
        <img className="nav-image" src={Logotipo} alt="" tabIndex="1" />
      </div>
      <ul className="navbar-menu">
        <li tabIndex="2">Quem somos?</li>
        <li tabIndex="3">Relatos</li>
        <li tabIndex="4">Contatos</li>
      </ul>
      <div className="navbar-social-network-container">
        <img className="svg-image" src={SocialNetworkSvg} alt="" />
        <div className="svg-extends"> </div>
        <ul className="navbar-social-network">
          <li>
            <a href="" tabIndex="5">
              <img className="social-icon" src={Facebook} alt="Link para o facebook do vale pcd" />
            </a>
          </li>
          <li>
            <a href="" tabIndex="6">
              <img className="social-icon" src={Instagram} alt="Link para o instagram do vale pcd" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
