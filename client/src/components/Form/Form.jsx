import React, { useState } from 'react';
import Field from '../Field';
import axiosPost from '../../global/func';
import './Form.scss';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = () => {
    axiosPost('/api/sendEmail', {
      name: name,
      email: email,
      subject: subject,
      text: text,
    }, (res) => { console.log(res.data); });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Field value={name} label="Nome:" type="text" handleChange={setName} />
      <Field value={email} label="E-mail:" type="email" handleChange={setEmail} />
      <Field value={subject} label="Assunto:" type="text" handleChange={setSubject} />
      <Field value={text} label="Digite aqui seu texto:" type="text" handleChange={setText} />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
