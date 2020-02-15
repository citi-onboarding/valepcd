import React, { useState } from 'react';
import Field from '../Field';
import axiosPost from '../../global/func';
import './Form.scss';

function Form() {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputSubject, setInputSubject] = useState('');
  const [inputText, setInputText] = useState('');

  const handleSubmit = () => {
    axiosPost('/api/sendEmail', {
      name: inputName,
      email: inputEmail,
      subject: inputSubject,
      text: inputText,
    }, (res) => { console.log(res.data); });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Field value={inputName} label="Nome:" type="text" handleChange={setInputName} />
      <Field value={inputEmail} label="E-mail:" type="email" handleChange={setInputEmail} />
      <Field value={inputSubject} label="Assunto:" type="text" handleChange={setInputSubject} />
      <Field value={inputText} label="Digite aqui seu texto:" type="text" handleChange={setInputText} />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
