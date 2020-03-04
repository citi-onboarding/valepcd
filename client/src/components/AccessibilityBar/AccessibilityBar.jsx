import React, { useState, useEffect } from 'react';
import ContrastSvg from '../../assets/contrast-setting.svg';
import LowerCaseSvg from '../../assets/lower-case.svg';
import UpperCaseSvg from '../../assets/upper-case.svg';
import ContrastSvgContrat from '../../assets/contrast-mode.svg';
import LowerCaseSvgContrast from '../../assets/lower-mode.svg';
import UpperCaseSvgContrast from '../../assets/upper-mode.svg';
import './AccessibilityBar.scss';
import { func } from 'prop-types';

function AccessibilityBar() {
  const [font, setFont] = useState('16px');
  const [contrast, setContrast] = useState(false);

  useEffect(() => {
    const Body = document.querySelector('body');
    const Html = document.querySelector('html');
    const Root = document.querySelector(':root');

    Body.style.fontSize = font;
    Html.style.fontSize = font;
    Root.style.fontSize = font;
  }, [font, contrast]);

  function AumentarFonte() {
    if (font === '16px') {
      setFont('18px');
    } else if (font === '18px') {
      setFont('20px');
    } else if (font === '20px') {
      setFont('22px');
    }
  }

  function DiminuirFonte() {
    if (font === '18px') {
      setFont('16px');
    } else if (font === '20px') {
      setFont('18px');
    } else if (font === '22px') {
      setFont('20px');
    }
  }

  function ContrastChange() {
    const body = document.querySelector('body');
    if (contrast) {
      setContrast(false);
      body.classList.remove('contrast-mode');
    } else {
      setContrast(true);
      body.classList.add('contrast-mode');
    }
  }

  return (
    <ul className="accessibility-container">
      <li className="buttons" onClick={ContrastChange}>
        <img className="side-bar-image" src={ContrastSvg} alt="Este é o botão de auto contraste" />
        <img className="side-bar-image-contrast" src={ContrastSvgContrat} alt="Este é o botão de auto contraste" />
        <p className="text">Mudar contraste</p>
      </li>
      <li className="buttons" onClick={AumentarFonte}>
        <img className="side-bar-image" src={UpperCaseSvg} alt="Este é o botão para aumentar a fonte" />
        <img className="side-bar-image-contrast" src={UpperCaseSvgContrast} alt="Este é o botão para aumentar a fonte" />
        <p className="text">Aumentar fonte</p>
      </li>
      <li className="buttons" onClick={DiminuirFonte}>
        <img className="side-bar-image" src={LowerCaseSvg} alt="Este é o botão para diminuir o tamanho da fonte" />
        <img className="side-bar-image-contrast" src={LowerCaseSvgContrast} alt="Este é o botão para diminuir o tamanho da fonte" />
        <p className="text">Diminuir fonte</p>
      </li>
    </ul>
  );
}

export default AccessibilityBar;
