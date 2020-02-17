import React from 'react';
import './Navbar.scss';
import NavbarMobile from '../NavbarMobile';
import NavbarWeb from '../NavbarWeb';

function Navbar() {

  return (
    <nav className="navbar">
      <NavbarWeb />
      <NavbarMobile />
    </nav>
  );
}

export default Navbar;
