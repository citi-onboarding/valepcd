import React from 'react';
import PropTypes from 'prop-types';
import './Title.scss';
import LeftWing from '../../Assets/left butterfly wing.svg';
import RightWing from '../../Assets/right butterfly wing.svg';

function Title({ title }) {
  return (
    <div className="title">
      <img src={RightWing} alt="" />
      <h1>{title}</h1>
      <img src={LeftWing} alt="" />
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string,
};

Title.defaultProps = {
  title: '',
};

export default Title;
