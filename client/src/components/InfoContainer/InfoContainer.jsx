import React from 'react';
import PropTypes from 'prop-types';

function InfoContainer({
  src, text, alt, aref,
}) {
  return (
    <li>
      <a href={aref}>
        <img src={src} alt={alt} />
        <p>{text}</p>
      </a>
    </li>
  );
}

InfoContainer.propTypes = {
  src: PropTypes.string,
  text: PropTypes.string,
  alt: PropTypes.string,
  aref: PropTypes.string,
};

InfoContainer.defaultProps = {
  src: '',
  text: '',
  alt: '',
  aref: '',
};

export default InfoContainer;
