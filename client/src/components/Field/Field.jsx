import React from 'react';
import PropTypes from 'prop-types';
import './Field.scss';

function Field({
  label, value, type, handleChange, className,
}) {
  const handleInput = (event) => {
    handleChange(event.target.value);
  };
  return (
    <div className="field">
      <label htmlFor={label}>
        <p>{label}</p>
        {className === 'input field-text'
          ? <textarea value={value} type={type} id={label} onChange={handleInput} className={className} autoComplete="off" />
          : <input value={value} type={type} id={label} onChange={handleInput} className={className} autoComplete="off" />}
      </label>
    </div>
  );
}

Field.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
};

Field.defaultProps = {
  className: '',
  value: '',
  label: 'input',
  type: 'text',
  handleChange: () => {},
};

export default Field;
