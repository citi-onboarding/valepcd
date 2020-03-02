import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import {
  Navbar,
  AboutUs,
  Carrousel,
  Banner,
  Contact,
  Footer,
  AccessibilityBar,
} from './components';

function App() {
  return (
    <section className="app">
      <Navbar />
      <AccessibilityBar />
      <Banner />
      <AboutUs />
      <Carrousel />
      <Contact />
      <Footer />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
