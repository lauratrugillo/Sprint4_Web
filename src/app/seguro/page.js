import Link from 'next/link'
import './Seguro.scss'

export default function Seguro(){

    return(
        <main>
        <div class="container">
            <img src='plano_fundo_2.png' id='fundo'/>
            <div class="overlay">
                <h1>Quem tem Porto, tem <br />mais tranquilidade <br />para pedalar</h1><br />
                <div class="container2">
                    <img src='check.png' alt="" id='check' /><h2>Porto Seguro Bike</h2>
                </div>
                <br />
                <p>Mais do que um seguro para bicicleta, uma solução <br />
                completa que oferece proteção e serviços para você <br />
                se aventurar sem medo.</p><br />
                <Link href='/seguro/cadastro'><button>Faça uma cotação</button></Link>
            </div>
        </div>
        <br />

        <div class='container3'>
            <h2>Com o Porto Seguro Bike, você escolhe <br />as coberturas de acordo com as suas <br />necessidades.</h2>
            <br />
            <p>São diversas coberturas para você <br />
            só se preocupar em pedalar:</p>
        </div>

        <div class="card-container">
            <div class="card">
                <img src='exclamacao_icon.png' alt="Card 1" />
                <h2>Danos a bike</h2>
            </div>
            <div class="card">
                <img src='bicicleta_icon.png' alt="Card 2"/>
                <h2>Roubo</h2>
            </div>
            <div class="card">
                <img src='acidente_icon.png' alt="Card 3"/>
                <h2>Acidentes pessoais</h2>
            </div>
            <div class="card">
                <img src='grupo_icon.png' alt="Card 4"/>
                <h2>Danos a terceiros</h2>
            </div>
        </div>
        </main>
    )
}