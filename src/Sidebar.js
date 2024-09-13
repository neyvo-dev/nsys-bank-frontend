import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? 'sidebar open' : 'sidebar'}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      
      <ul>
        <li>
          <Link to="/criar-conta" onClick={toggleSidebar}>Criar Conta</Link>
        </li>
        <li>
          <Link to="/listar-contas" onClick={toggleSidebar}>Listar Contas</Link>
        </li>
        <li>
          <Link to="/listar-notificacoes" onClick={toggleSidebar}>Notificações</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
