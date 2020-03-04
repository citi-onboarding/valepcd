import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrousel.scss';
import NexvArrowSvg from '../../assets/Carrousel/left-arrow-1.svg';
import PrevArrowSvg from '../../assets/Carrousel/left-arrow.svg';
import NexvArrowSvgContrast from '../../assets/left-arrow-1-contrast.svg';
import PrevArrowSvgContrast from '../../assets/left-arrow-contrast.svg';
import ImagemCarrousel from '../../assets/p1.png.svg';
import QuotesSvg from '../../assets/quotes.svg';
import Caminho79Svg from '../../assets/Caminho79.svg';
import Caminho80Svg from '../../assets/Caminho80.svg';
import Caminho62Svg from '../../assets/Caminho62.svg';
import Caminho63Svg from '../../assets/Caminho63.svg';
import Caminho8Svg from '../../assets/Grupo_8.svg';
import Caminho81Svg from '../../assets/Grupo_8-1.svg';
import { axiosGet } from '../../global/func';
import Title from '../Title';

function Carrousel() {
  const [res, setRes] = useState(null);

  useEffect(() => {
    axiosGet('/relatos', setRes);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <img id="carrousel-image" src={NexvArrowSvg} alt="" />,
    prevArrow: <img id="carrousel-image" src={PrevArrowSvg} alt="" />,
  };

  const settingsContrast = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <img id="carrousel-image-contrast" src={NexvArrowSvgContrast} alt="" />,
    prevArrow: <img id="carrousel-image-contrast" src={PrevArrowSvgContrast} alt="" />,
  };

  console.log('aqui');
  res && console.log(res[0]);
  return (
    <section id="relatos" className="carrousel-section-container">
      <div className="container-title">
        <Title title="Relatos" />
      </div>
      <img className="carrousel-svg-79" src={Caminho79Svg} alt="" />
      <img className="carrousel-svg-80" src={Caminho80Svg} alt="" />
      <img className="carrousel-svg-62" src={Caminho62Svg} alt="" />
      <img className="carrousel-svg-63" src={Caminho63Svg} alt="" />
      <div className="carrousel-container">
        <Slider {...settings}>
          { res && res[0].image && res[0].image[0].url && res.map((slid) => (
            <div className="carrousel-item-container">
              <img className="carrousel-image-item" src={slid.image[0].url} alt="" />
              <div className="carrousel-text-container">
                <img className="quote-img-rotate" src={QuotesSvg} alt="" />
                <p>
                  {slid.text}
                </p>
                <h3>{slid.name}</h3>
                <h5>{slid.about}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="carrousel-container-contrast">
        <Slider {...settingsContrast}>
          { res && res[0].image && res[0].image[0].url && res.map((slid) => (
            <div className="carrousel-item-container-contrast">
              <img className="carrousel-image-item-contrast" src={slid.image[0].url} alt="" />
              <div className="carrousel-text-container-contrast">
                <img className="quote-img-rotate-contrast" src={QuotesSvg} alt="" />
                <p>
                  {slid.text}
                </p>
                <h3>{slid.name}</h3>
                <h5>{slid.about}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Carrousel;
