import React, { useState } from 'react';
import axios from 'axios';

const ContaForm = () => {
  const [formData, setFormData] = useState({
    numero: '',
    nome: '',
    cpf: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/contas', formData, {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/2023.5.8'
        }
      });
      console.log('Resposta do servidor:', response.data);
      alert('Conta criada com sucesso!');
    } catch (error) {
      if (error.response) {
        console.error('Erro da API:', error.response.data); // Detalhes do erro retornado pela API
        alert(`Erro ao criar a conta: ${error.response.data.message}`);
      } else {
        console.error('Erro desconhecido:', error);
        alert('Erro ao criar a conta.');
      }
    }
  };
  

  return (
    <div>
      <h2>Criar Conta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Número da Conta:</label>
          <input
            type="text"
            name="numero"
            value={formData.numero}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Criar Conta</button>
      </form>
    </div>
  );
};

export default ContaForm;
