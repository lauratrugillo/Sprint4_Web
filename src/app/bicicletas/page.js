"use client"

import React, { useState, useEffect } from 'react';
import './Bicicletas.scss';
import apiService from '../apiService';

export default function Bicicletas() {
  const [cpf, setCpf] = useState('');
  const [bicicletas, setBicicletas] = useState([]);
  const [error, setError] = useState(null);

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

      if (!response.ok) {
        throw new Error(`Erro ao buscar bicicletas: ${response.statusText}`);
      }

      const data = await response.json();
      setBicicletas(data);
    } catch (error) {
      setError(`Erro ao buscar bicicletas: ${error.message}`);
    }
  };

  useEffect(() => {
    if (cpf) {
      handleSearch();
    }
  }, [cpf]);

  return (
    <main>
      <div className="container6">
        <form>
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

          <button type="button" onClick={handleSearch}>
            Buscar
          </button>
        </form>

        <div>
          <br />
          <h2>Bicicletas Registradas</h2>
          {error && <p>{error}</p>}
          <ul>
            {bicicletas.map((bicicleta) => (
              <li key={bicicleta.num_serie}>{bicicleta.modelo}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
