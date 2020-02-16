import React from 'react';
import PropTypes from 'prop-types';
import InfoContainer from '../InfoContainer';
import Phone from '../../Assets/call branco.svg';
import Insta from '../../Assets/insta branco.svg';
import Facebook from '../../Assets/facebook branco.svg';
import Envelope from '../../Assets/envelope branco.svg';
import Arrow from '../../Assets/Backgrounds/right-chevron.svg';
import './Info.scss';

function Info({ onClickArrow, className }) {
  return (
    <div className={`info-container ${className}`}>
      <ul>
        <InfoContainer src={Phone} text="(81) 3426-8978" alt="Icone Telefone" />
        <InfoContainer src={Envelope} text="pcdvale@gmail.com" alt="Icone Email" />
        <InfoContainer src={Facebook} text="/valePCD" alt="Icone Facebook" aref="https://www.facebook.com" />
        <InfoContainer src={Insta} text="@pcdvale" alt="Icone Instagram" aref="https://www.instagram.com" />
      </ul>
      <button className="arrow-button" type="button" onClick={onClickArrow}>
        <img src={Arrow} alt="" />
      </button>
    </div>
  );
}

Info.propTypes = {
  className: PropTypes.bool,
  onClickArrow: PropTypes.func,
};

Info.defaultProps = {
  className: false,
  onClickArrow: () => {},
};

export default Info;
