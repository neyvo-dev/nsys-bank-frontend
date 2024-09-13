import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const formatarDataHora = (dataHora) => {
  const data = new Date(dataHora);
  return format(data, "dd'/'MM'/'yyyy HH:mm:ss", { locale: ptBR });
};

const ListaNotificacoes = () => {
  const [notificacoes, setNotificacoes] = useState(null); // Inicialize como null ou um objeto vazio

  useEffect(() => {
    const fetchNotificacoes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/notificacoes');
        setNotificacoes(response.data);
      } catch (error) {
        console.error('Erro ao buscar notificações:', error);
        alert('Erro ao buscar notificações');
      }
    };

    fetchNotificacoes();
  }, []);

  return (
    <div>
      <h2>Lista de Notificações</h2>
      {notificacoes && notificacoes.content && notificacoes.content.length > 0 ? ( // Verifique se `notificacoes` e `content` existem
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Mensagem</th>
              <th>Data/Hora</th>
            </tr>
          </thead>
          <tbody>
            {notificacoes.content.map((notificacao) => (
              <tr key={notificacao.id}>
                <td>{notificacao.id}</td>
                <td>{notificacao.notificacao}</td>
                <td>{formatarDataHora(notificacao.dataHora)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhuma notificação encontrada</p>
      )}
    </div>
  );
};

export default ListaNotificacoes;
