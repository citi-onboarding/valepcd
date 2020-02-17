import React from 'react';
import './Footer.scss';
import { ReactComponent as Heart } from '../../assets/like.svg';

function Footer() {
  return (
    <footer>
      <p>
        Made with <i className="fa fa-code"></i> and <span><Heart /></span> by <a href="https://citi.org.br/">CITi</a>
      </p>
    </footer>
  );
}

export default Footer;
