import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrousel.scss';
import NexvArrowSvg from '../../assets/Carrousel/left-arrow-1.svg';
import PrevArrowSvg from '../../assets/Carrousel/left-arrow.svg';

function Carrousel() {
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
    <section className="carrousel-container">
      <Slider {...settings}>
        <div className="carrousel-item-container">
          <img src="https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg" alt="" />
          <div className="carrousel-text-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Nihil omnis expedita
              facere dignissimos ut nemo. Ab consequuntur
              ullam sit eaque ex nesciunt, natus adipisci,
            </p>
            <h3>1</h3>
          </div>
        </div>
        <div className="carrousel-item-container">
          <img src="https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg" alt="" />
          <h3>2</h3>
        </div>
        <div className="carrousel-item-container">
          <img src="https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg" alt="" />
          <h3>3</h3>
        </div>
        <div className="carrousel-item-container">
          <img src="https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg" alt="" />
          <h3>4</h3>
        </div>
        <div className="carrousel-item-container">
          <img src="https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg" alt="" />
          <h3>5</h3>
        </div>
        <div className="carrousel-item-container">
          <img src="https://osegredo.com.br/wp-content/uploads/2018/02/as-pessoas-de-cora%C3%A7%C3%B5es-de-ouro-830x450.jpg" alt="" />
          <h3>6</h3>
        </div>
      </Slider>
    </section>
  );
}

export default Carrousel;
