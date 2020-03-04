import React, { useEffect, useState } from 'react';
import './AboutUs.scss';
import AboutUsImg from '../AboutUsImg';
import quotesSVG from '../../assets/quotes.svg';
import { axiosGet } from '../../global/func';
import Title from '../Title';

function AboutUs() {
  const [res, setRes] = useState(null);

  useEffect(() => {
    axiosGet('/quem-somos', setRes);
  }, []);

  const { title, text } = res || {};

  return (
    <section id="vale">
      <Title title="O que é o Vale" />
      <div id="about-us">
        <div id="about-us-image">
          <AboutUsImg image={res ? res.image[0].url : ''} />
        </div>
        <div id="about-us-content">
          <div className="about-us-subtitle">
            <img src={quotesSVG} alt="" className="quote-img" />
            <h2>{ title }</h2>
            <img src={quotesSVG} alt="" className="quote-img-rotate" />
          </div>
          <p>
            { text }
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
