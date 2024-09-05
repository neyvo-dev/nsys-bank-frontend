import logo from './logo.svg';
import './App.css';
import React from 'react';
import ContaForm from './ContaForm';
import ListaContas from './ListaContas';

function App() {
  return (
    <div className="App">
      <ContaForm />
      <hr />
      <ListaContas />
    </div>
  );
}

export default App;
