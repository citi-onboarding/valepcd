import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import {
  Navbar,
  AboutUs,
  Carrousel,
  Banner,
  Contact,
} from './components';

function App() {
  return (
    <section className="app">
      <Navbar />
      <Banner />
      <AboutUs />
      <Contact />
      <Carrousel />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
