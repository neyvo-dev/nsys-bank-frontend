import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ContaForm from './ContaForm';
import ListaContas from './ListaContas';
import ListaNotificacao from './ListaNotificacao';
import Sidebar from './Sidebar';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">        
        <Header />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/criar-conta" element={<ContaForm />} />
            <Route path="/listar-contas" element={<ListaContas />} />
            <Route path="/listar-notificacoes" element={<ListaNotificacao />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
