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
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <Field className='input'  value={name} label="Nome:" type="text" handleChange={setName} />
        <Field className='input' value={email} label="E-mail:" type="email" handleChange={setEmail} />
        <Field className='input' value={subject} label="Assunto:" type="text" handleChange={setSubject} />
        <Field className='field-text' value={text} label="Digite aqui seu texto:" type="text" handleChange={setText} />
        <button className="send-button" type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
