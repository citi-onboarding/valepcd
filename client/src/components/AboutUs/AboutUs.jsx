import React from 'react';
import './AboutUs.scss';
import AboutUsImg from '../AboutUsImg';
import quotesSVG from '../../assets/quotes.svg';

function AboutUs() {
  return (
    <section id="about-us">
      <div id="about-us-image">
        <AboutUsImg />
      </div>
      <div id="about-us-content">
        <div className="about-us-subtitle">
          <img src={quotesSVG} alt="" className="quote-img" />
          <h2>Nullam non ex finibus, gravida mi sit amet</h2>
          <img src={quotesSVG} alt="" className="quote-img-rotate" />
        </div>
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
