import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, AboutUs, Contact } from './components';
import './App.scss';

function App() {
  const [state, setState] = useState(false);
  return (
    <section className="app">
      <Navbar />
      <AboutUs />
      <Contact />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
