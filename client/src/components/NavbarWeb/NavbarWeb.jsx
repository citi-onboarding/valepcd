import React from 'react';
import './NavbarWeb.scss';
import Logotipo from '../../assets/Navbar/Logotipo.png';
import Facebook from '../../assets/Navbar/facebook-logo.svg';
import Instagram from '../../assets/Navbar/instagram.svg';
import SocialNetworkSvg from '../../assets/Navbar/Caminho_98.svg';
import MenuHamburguer from '../../assets/Navbar/list-menu.png';
import LogotipoContrast from '../../assets/logotipo-contrast.svg';

function NavbarWeb() {
  function openNavbar() {
    console.log('olaaa');
    document.querySelector('#nav-mobile').classList.add('openNavbar');
  }
  return (
    <nav className="navbar-web">
      <div className="navbar-logo">
        <img className="nav-image" src={Logotipo} alt="" tabIndex="1" />
        <img className="nav-image-contrast" src={LogotipoContrast} alt="" tabIndex="1" />
      </div>
      <ul className="navbar-menu">
        <li tabIndex="2"><a href=" ">Quem somos?</a></li>
        <li tabIndex="3"><a href=" ">Relatos</a></li>
        <li tabIndex="4"><a href=" ">Contatos</a></li>
      </ul>
      <div className="navbar-social-network-container">
        <img className="svg-image" src={SocialNetworkSvg} alt="" />
        <div className="svg-extends"> </div>
        <ul className="navbar-social-network">
          <li>
            <a href=" " tabIndex="5">
              <img className="social-icon" src={Facebook} alt="Link para o facebook do vale pcd" />
            </a>
          </li>
          <li>
            <a href=" " tabIndex="6">
              <img className="social-icon" src={Instagram} alt="Link para o instagram do vale pcd" />
            </a>
          </li>
        </ul>
        <div className="button-hamburguer-container">
          <button className="button button-hamburguer" id="hamburguer-nav" onClick={openNavbar}>
            <img src={MenuHamburguer} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavbarWeb;
