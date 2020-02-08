import React from 'react';
import PropTypes from 'prop-types';

function Input({ label, type }) {
  return (
    <div>
      <label htmlFor={label}>
        <input type={type} id={label} />
      </label>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  label: 'input',
  type: 'text',
};

export default Input;
