"use client"

import { useState } from 'react';
import './Cadastro.scss';

export default function Cadastro() {

  const [formValues, setFormValues] = useState({
    num_serie: '',
    modelo: '',
    marca: '',
    cor: '',
    tamanho: '',
    tipo: '',
    valor: '',
    nota_fiscal: '',
    ano: '',
    cpf: '',
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/demo/webapi/bicicletas/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      window.location.replace('/seguro/cadastro/vistoria')

      if (!response.ok) {
        throw new Error(`Erro ao enviar formulário: ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log(responseData);

    } catch (error) {
      console.log('Erro ao enviar formulário: ', error);
    }
  };

  return (
    <main>
      <div className="container4">
        <div className="container2">
          <img src="../telefone.png" alt="" id="telefone" />
          <h1>Ligamos para você</h1>
        </div>

        <form action="/seguro/cadastro/vistoria" onSubmit={handleSubmit}>
          <h2>Sua bicicleta</h2>
          <br />

          <input
            type="text"
            id="num_serie"
            name="num_serie"
            placeholder="Número de Série"
            value={formValues.num_serie}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <input
            type="text"
            id="modelo"
            name="modelo"
            placeholder="Modelo"
            value={formValues.modelo}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <input
            type="text"
            id="marca"
            name="marca"
            placeholder="Marca"
            value={formValues.marca}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <input
            type="text"
            id="cor"
            name="cor"
            placeholder="Cor"
            value={formValues.cor}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <input
            type="text"
            id="tamanho"
            name="tamanho"
            placeholder="Tamanho"
            value={formValues.tamanho}
            onChange={handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            id="tipo"
            name="tipo"
            placeholder="Tipo"
            value={formValues.tipo}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <input
            type="text"
            id="valor"
            name="valor"
            placeholder="Valor"
            value={formValues.valor}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <input
            type="text"
            id="nota_fiscal"
            name="nota_fiscal"
            placeholder="Nota Fiscal"
            value={formValues.nota_fiscal}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <input
            type="text"
            id="ano"
            name="ano"
            placeholder="Ano"
            value={formValues.ano}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <input
            type="text"
            id="cpf"
            name="cpf"
            placeholder="CPF"
            value={formValues.cpf}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <button type="submit">Continuar</button>

          <br />
          <br />
        </form>
      </div>
    </main>
  );
}
