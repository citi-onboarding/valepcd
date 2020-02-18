import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Banner, AboutUs, Contact } from './components';
import './App.scss';

function App() {
  return (
    <section className="app">
      <Navbar />
      <Banner />
      <AboutUs />
      <Contact />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
