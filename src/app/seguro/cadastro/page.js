"use client"

import './Cadastro.scss'

export default function Cadastro(){

    return(
        <main>
            <div class='container4'>

                <div class='container2'>
                <img src='../telefone.png' alt="" id='telefone' /><h1>Ligamos para você</h1>
                </div>


                <form action="/seguro/cadastro/vistoria" onSubmit={e => e.preventDefault}>
                
                <h2>Sua bicicleta</h2>
                <br />
                
                    <input type="text" id="valorBicicleta" name="valorBicicleta" placeholder="Qual o valor da sua bicicleta?" required /><br /><br />
                
                    <input type="text" id="nome" name="nome" placeholder="Nome" required /><br /><br />

                    <input type="text" id="email" name="email" placeholder="E-mail" required /><br /><br />

                    <input type="text" id="telefone" name="telefone" placeholder="Telefone para contato" required /><br /><br />

                    <input type="text" id="cpf" name="cpf" placeholder="CPF" required /><br /><br />

                    <input type="text" id="cep" name="cep" placeholder="CEP" required /><br /><br />

                    <button type="submit">Continuar</button>

                    <br/><br/>
                </form>
            </div>
        </main>
    )
}
