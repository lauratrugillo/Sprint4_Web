"use client"

import React, { useState, useEffect } from 'react';
import './Bicicletas.scss';

// ... (importações e outros códigos)

export default function Bicicletas() {
  const [cpf, setCpf] = useState('');
  const [bicicletas, setBicicletas] = useState([]);
  const [error, setError] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [showError, setShowError] = useState(false); // Novo estado para controlar a exibição da mensagem de erro

  const handleCpfChange = (e) => {
    setCpf(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8080/demo/webapi/bicicletas/${cpf}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      setBicicletas(data);
      setShowResults(true);
      setShowError(false); // Define showError como false quando a busca é bem-sucedida
    } catch (error) {
      setError(`Erro ao buscar bicicletas`);
      setShowError(true); // Define showError como true ao encontrar um erro
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(false);
    setShowError(false); // Oculta a mensagem de erro ao iniciar uma nova busca
    handleSearch();
  };

  return (
    <main>
      <div className="container6">
        <form onSubmit={handleSubmit}>
          <h1>Consulte suas bicicletas</h1>
          <br />
          <input
            type="text"
            id="cpf"
            name="cpf"
            placeholder="Digite o CPF"
            value={cpf}
            onChange={handleCpfChange}
            required
          />
          <br />
          <br />

          <button type="submit">Buscar</button>
        </form>

        <div>
          <br />
          <h2>Bicicletas Registradas</h2>
          {showError && <p>{error}</p>}
          
          {showResults && (
            <table className="bicicletas-table">
            <thead>
              <tr>
                <th>Número de Série</th>
                <th>Modelo</th>
                <th>Marca</th>
                <th>Cor</th>
                <th>Tamanho</th>
                <th>Tipo</th>
                <th>Valor</th>
                <th>Nota Fiscal</th>
                <th>Ano</th>
              </tr>
            </thead>
            <tbody>
              {bicicletas.map((bicicleta) => (
                <tr key={bicicleta.num_serie}>
                  <td>{bicicleta.num_serie}</td>
                  <td>{bicicleta.modelo}</td>
                  <td>{bicicleta.marca}</td>
                  <td>{bicicleta.cor}</td>
                  <td>{bicicleta.tamanho}</td>
                  <td>{bicicleta.tipo}</td>
                  <td>{bicicleta.valor}</td>
                  <td>{bicicleta.nota_fiscal}</td>
                  <td>{bicicleta.ano}</td>
                </tr>
              ))}
            </tbody>
          </table>
          )}
        </div>
      </div>
    </main>
  );
}
