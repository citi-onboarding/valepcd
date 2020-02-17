import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Field from '../Field';
import { axiosPost } from '../../global/func';
import Arrow from '../../Assets/Backgrounds/right-chevron.svg';
import './Form.scss';

function Form({ onClickArrow, className }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
 
    axiosPost('/api/sendmail', {
      name,
      email,
      subject,
      text,
    }, (res) => { console.log(res.data); });
    setName('');
    setEmail('');
    setSubject('');
    setText('');
  };

  return (
    <div className={`container-form ${className}`}>
      <form onSubmit={handleSubmit}>
        <Field className="input" value={name} label="Nome:" type="text" handleChange={setName} />
        <Field className="input" value={email} label="E-mail:" type="email" handleChange={setEmail} />
        <Field className="input" value={subject} label="Assunto:" type="text" handleChange={setSubject} />
        <Field className="input field-text" value={text} label="Digite aqui seu texto:" type="text" handleChange={setText} />
        <button className="send-button" type="submit">Enviar</button>
      </form>
      <button className="arrow-button" type="button" onClick={onClickArrow}>
        <img src={Arrow} alt="" />
      </button>
    </div>
  );
}

Form.propTypes = {
  className: PropTypes.bool,
  onClickArrow: PropTypes.func,
};

Form.defaultProps = {
  className: false,
  onClickArrow: () => {},
};
export default Form;
