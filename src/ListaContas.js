import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListaContas = () => {
  const [contas, setContas] = useState([]);

  useEffect(() => {
    // Fazer a requisição GET para o endpoint de listar contas
    const fetchContas = async () => {
      try {
        const response = await axios.get('http://localhost:8080/contas');
        setContas(response.data);
      } catch (error) {
        console.error('Erro ao buscar contas:', error);
        alert('Erro ao buscar contas');
      }
    };

    fetchContas();
  }, []);

  return (
    <div>
      <h2>Lista de Contas</h2>
      {contas.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Número</th>
              <th>Nome</th>
              <th>CPF</th>
            </tr>
          </thead>
          <tbody>
            {contas.map((conta) => (
              <tr key={conta.id}>
                <td>{conta.numero}</td>
                <td>{conta.nome}</td>
                <td>{conta.cpf}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhuma conta encontrada</p>
      )}
    </div>
  );
};

export default ListaContas;
