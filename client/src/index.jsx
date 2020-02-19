import React from 'react';
import ReactDOM from 'react-dom';
import {
  Navbar,
  AboutUs,
  Carrousel,
  Banner,
} from './components/index';


function App() {
  return (
    <section className="app">
      <Navbar />
      <Banner />
      <AboutUs />
      <Carrousel />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
