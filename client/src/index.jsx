import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, AboutUs } from './components/index';

function App() {
  return (
    <section className="app">
      <Navbar />
      <AboutUs />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
