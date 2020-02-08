import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './components/index';

function App() {
  return (
    <section className="app">
      <Navbar />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
