import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Info, Title } from './components';

function App() {
  return (
    <section className="app">
      <Title title="Fale conosco!" />
      <div className="teste">
        <Form />
        <Info />
      </div>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
