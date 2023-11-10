"use client"

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Bicicletas.scss'

export default function Bicicletas(){
    const [cpf, setCpf] = useState('');
    const [bicicletas, setBicicletas] = useState([]);
    const [error, setError] = useState(null)

    const handleCpfChange = (e) => {
        setCpf(e.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get('URL');
            setBicicletas(response.data)
        } catch (error) {
            setError('Erro ao buscar bicicletas: ' + error.message);
        }
    };

    useEffect(() => {
        if (cpf) {
            handleSearch();
        }
    }, [cpf]);
    

    return(
        <main>
            <div className="container6">
                <form>
                    <h1>Consulte suas bicicletas</h1>
                    <br />
                    <input type='text' id='cpf' name='cpf' placeholder='Digite o CPF' value={cpf} onChange={handleCpfChange} required />
                    <br /><br />

                    <button type='button' onClick={handleSearch}>
                        Buscar
                    </button>
                </form>

                <div>
                <br />
                <h2>Bicicletas Registradas</h2>
                {error && <p>{error}</p>}
                <ul>
                    {bicicletas.map((bicicleta) => (
                    <li key={bicicleta.id}>{bicicleta.nome}</li>
                    // Substitua 'id' e 'nome' pelos nomes reais dos campos na resposta da API
                    ))}
                </ul>
                </div>
            </div>
        </main>
    )
}