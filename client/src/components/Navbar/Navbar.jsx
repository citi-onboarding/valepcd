import React from 'react';
import './Navbar.scss';
import Logotipo from '../../assets/Navbar/Logotipo.png';
import Facebook from '../../assets/Navbar/facebook-logo.svg';
import Instagram from '../../assets/Navbar/instagram.svg';
import SocialNetworkSvg from '../../assets/Navbar/Caminho_98.svg';
import MenuHamburguer from '../../assets/Navbar/list-menu.png';
import MenuClose from '../../assets/Navbar/saida.svg';
import CurveSvg from '../../assets/Navbar/Caminho_89.svg';

import CurveItemNav1Svg from '../../assets/Navbar/Caminho_90.svg';
import CurveItemNav2Svg from '../../assets/Navbar/Caminho_91.svg';
import CurveItemNav3Svg from '../../assets/Navbar/Caminho_92.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <nav className="navbar-web">
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
          <div className="button-hamburguer-container">
            <button className="button-hamburguer">
              <img src={MenuHamburguer} alt="" />
            </button>
          </div>
        </div>
      </nav>
      <div className="navbar-mobile">
        <button>
          <img src={MenuClose} alt="" />
        </button>
        <div className="navbar-logo">
          <img className="nav-image" src={Logotipo} alt="" tabIndex="1" />
        </div>
        <ul>
          <li>
            <img src={CurveItemNav1Svg} alt="" />
            <a href="">O que é o vale</a>
          </li>
          <li>
            <img src={CurveItemNav2Svg} alt="" />
            <a href="">Relatos</a>
          </li>
          <li>
            <img src={CurveItemNav3Svg} alt="" />
            <a href="">Fale conosco</a>
          </li>
        </ul>
        <div>
          <img src={CurveSvg} alt="" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
