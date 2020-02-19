import React from 'react';
import './NavbarMobile.scss';
import MenuClose from '../../assets/Navbar/saida.svg';
import CurveSvg from '../../assets/Navbar/Caminho_89.svg';
import Logotipo from '../../assets/Navbar/Logotipo.png';
import CurveItemNav1Svg from '../../assets/Navbar/Caminho_90.svg';
import CurveItemNav2Svg from '../../assets/Navbar/Caminho_91.svg';
import CurveItemNav3Svg from '../../assets/Navbar/Caminho_92.svg';

function NavbarMobile() {
  function closeNavbar() {
    console.log('olaaa22');
    document.querySelector('#nav-mobile').classList.remove('openNavbar');
    document.querySelector('#nav-mobile').classList.add('closeNavbar');
    setTimeout(() => {
      document.querySelector('#nav-mobile').classList.remove('closeNavbar');
    }, 1000);
  }

  return (
    <nav id="nav-mobile" className="navbar-mobile">
      <div className="navbar-mobile-button-close">
        <button className="button" onClick={closeNavbar}>
          <img src={MenuClose} alt="" />
        </button>
      </div>
      <div className="navbar-logo-mobile">
        <img className="nav-image" src={Logotipo} alt="" tabIndex="1" />
      </div>
      <ul className="navbar-mobile-list">
        <li className="navbar-mobile-list-item">
          <div className="navbar-mobile-list-item-container">
            <img className="navbar-mobile-item-image" src={CurveItemNav1Svg} alt="" />
            <div className="navbar-mobile-item-text-container navbar-mobile-item-text-container-padding">
              <a className="navbar-mobile-item-text " href=" ">O que é o Vale</a>
            </div>
          </div>
        </li>
        <li className="navbar-mobile-list-item">
          <div className="navbar-mobile-list-item-container">
            <img className="navbar-mobile-item-image" src={CurveItemNav2Svg} alt="" />
            <div className="navbar-mobile-item-text-container">
              <a className="navbar-mobile-item-text" href=" ">Relatos</a>
            </div>
          </div>
        </li>
        <li className="navbar-mobile-list-item">
          <div className="navbar-mobile-list-item-container">
            <img className="navbar-mobile-item-image" src={CurveItemNav3Svg} alt="" />
            <div className="navbar-mobile-item-text-container">
              <a className="navbar-mobile-item-text" href=" ">Fale conosco</a>
            </div>
          </div>
        </li>
      </ul>
      <footer className="navbar-mobile-footer">
        <img src={CurveSvg} alt="" />
      </footer>
    </nav>
  );
}

export default NavbarMobile;
