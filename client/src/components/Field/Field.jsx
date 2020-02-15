import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Field.scss';

function Field({ label, value, type, handleChange }) {
  const handleInput = (event) => {
    handleChange(event.target.value);
  };
  return (
    <div className="field">
      <label htmlFor={label}>
        <p>{label}</p>
        <input value={value} type={type} id={label} onChange={handleInput} className="input" />
      </label>
    </div>
  );
}

Field.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
};

Field.defaultProps = {
  value: '',
  label: 'input',
  type: 'text',
  handleChange: () => {},
};

export default Field;
