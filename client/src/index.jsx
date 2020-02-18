import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, AboutUs, Form, Info, Title } from './components';
import './App.scss';

function App() {
  const [state, setState] = useState(false);
  return (
    <section className="app">
      <Navbar />
      <Banner />
      <AboutUs />
      <section className="contact">
        <Title title="Fale conosco!" />
        <div className="contact-container">
          <Info onClickArrow={() => setState(!state)} className={state} />
          <Form onClickArrow={() => setState(!state)} className={!state} />
        </div>
      </section>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
