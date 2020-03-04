import React, { useState } from 'react';
import Title from '../Title';
import Info from '../Info';
import Form from '../Form';
import './Contact.scss';

function Contact() {
  const [state, setState] = useState(false);
  return (
    <section id="fale-conosco" className="contact">
      <Title title="Fale conosco!" />
      <div className="contact-container">
        <Info onClickArrow={() => setState(!state)} className={state} />
        <Form onClickArrow={() => setState(!state)} className={!state} />
      </div>
    </section>
  );
}

export default Contact;
