import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrousel.scss';
import NexvArrowSvg from '../../assets/Carrousel/left-arrow-1.svg';
import PrevArrowSvg from '../../assets/Carrousel/left-arrow.svg';
import ImagemCarrousel from '../../assets/p1.png.svg';
import QuotesSvg from '../../assets/quotes.svg';
import Caminho79Svg from '../../assets/Caminho79.svg';
import Caminho80Svg from '../../assets/Caminho80.svg';
import Caminho62Svg from '../../assets/Caminho62.svg';
import Caminho63Svg from '../../assets/Caminho63.svg';
import Caminho8Svg from '../../assets/Grupo_8.svg';
import Caminho81Svg from '../../assets/Grupo_8-1.svg';
import { axiosGet } from '../../global/func';

function Carrousel() {
  const [res, setRes] = useState(null);

  useEffect(() => {
    axiosGet("/quem-somos", setRes);
  }, []);

  const { image, text, name, end } = res || {};

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <img id="carrousel-image" src={NexvArrowSvg} alt="" />,
    prevArrow: <img id="carrousel-image" src={PrevArrowSvg} alt="" />,
  };
  return (
    <section className="carrousel-section-container">
      <div className="container-title">
        <img className="image-title" src={Caminho8Svg} alt="" />
        <h1 className="titulo">Relatos</h1>
        <img className="image-title" src={Caminho81Svg} alt="" />
      </div>
      <img className="carrousel-svg-79" src={Caminho79Svg} alt="" />
      <img className="carrousel-svg-80" src={Caminho80Svg} alt="" />
      <img className="carrousel-svg-62" src={Caminho62Svg} alt="" />
      <img className="carrousel-svg-63" src={Caminho63Svg} alt="" />
      <div className="carrousel-container">
        <Slider {...settings}>
          <div className="carrousel-item-container">
            <img className="carrousel-image-item" src={ImagemCarrousel} alt="" />
            <div className="carrousel-text-container">
              <img className="quote-img-rotate" src={QuotesSvg} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nihil omnis expedita
                facere dignissimos ut nemo. Ab consequuntur
                ullam sit eaque ex nesciunt, natus adipisci,
              </p>
              <h3>nome</h3>
              <h5>descrição</h5>
            </div>
          </div>
          <div className="carrousel-item-container">
            <img className="carrousel-image-item" src="https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg" alt="" />
            <div className="carrousel-text-container">
              <img className="quote-img-rotate" src={QuotesSvg} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nihil omnis expedita
                facere dignissimos ut nemo. Ab consequuntur
                ullam sit eaque ex nesciunt, natus adipisci,
              </p>
              <h3>nome</h3>
              <h5>descrição</h5>
            </div>
          </div>
          <div className="carrousel-item-container">
            <img className="carrousel-image-item" src="https://osegredo.com.br/wp-content/uploads/2018/02/pessoas-que-superam-a-depress%C3%A3o-830x450.jpg" alt="" />
            <div className="carrousel-text-container">
              <img className="quote-img-rotate" src={QuotesSvg} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Nihil omnis expedita
              </p>
              <h3>nome</h3>
              <h5>descrição</h5>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Carrousel;
