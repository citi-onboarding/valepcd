import React from 'react';
import './AboutUs.scss';
import AboutUsImg from '../AboutUsImg';
import quotesSVG from '../../assets/quotes.svg';

function AboutUs() {
  return (
    <section id="aboutUs">
      <div>
        <AboutUsImg />
      </div>
      <div>
        <h2>Subtítulo</h2>
        <img src={quotesSVG} alt="" className="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid blanditiis,
          odit enim unde repudiandae facilis quia itaque natus! Sapiente fugit similique,
          quidem quis modi voluptate aliquid totam. Ipsam, dolorem veniam.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
