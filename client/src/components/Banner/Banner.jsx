import React from 'react';
import './Banner.scss';
import { ReactComponent as BannerSVG } from '../../assets/banner.svg';

function Banner() {
  return (
    <section id ="banner-id" className="banner">
      <div className="banner-content">
        <h1>Vale PCD</h1>
        <p>Venha nos ajudar a transformar o</p>
        <p>Vale PCD em realidade!</p>
      </div>
      <div className="banner-image">
        <BannerSVG />
      </div>
    </section>
  );
}

export default Banner;
