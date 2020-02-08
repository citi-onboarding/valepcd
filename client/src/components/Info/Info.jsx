import React from 'react';
import InfoContainer from '../InfoContainer';
import Phone from '../../Assets/call branco.svg';
import Insta from '../../Assets/insta branco.svg';
import Facebook from '../../Assets/facebook branco.svg';
import Envelope from '../../Assets/envelope branco.svg';

function Info() {
  return (
    <div className="info-container">
      <InfoContainer src={Phone} text="(81) 3426-8978" alt="Icone Telefone" />
      <InfoContainer src={Envelope} text="pcdvale@gmail.com" alt="Icone Email" />
      <InfoContainer src={Facebook} text="/valePCD" alt="Icone Facebook" aref="https://www.facebook.com" />
      <InfoContainer src={Insta} text="@pcdvale" alt="Icone Instagram" aref="https://www.instagram.com" />
    </div>
  );
}

export default Info;
