import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, AboutUs, Banner } from './components/index';
import { Form, Info, Title } from './components';
import './App.scss';

function App() {
  return (
    <section className="app">
      <Navbar />
      <Banner />
      <AboutUs />
      <Title title="Fale conosco!" />
      <div className="teste">
        <Info />
        <Form />
      </div>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
