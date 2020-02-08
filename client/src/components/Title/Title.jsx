import React from 'react';
import PropTypes from 'prop-types';
import LeftWing from '../../Assets/left butterfly wing.svg';
import RightWing from '../../Assets/right butterfly wing.svg';

function Title({ title }) {
  return (
    <div className="title">
      <img src={LeftWing} alt="" />
      <h1>{title}</h1>
      <img src={RightWing} alt="" />
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
