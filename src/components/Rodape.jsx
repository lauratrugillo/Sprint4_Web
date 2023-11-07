import Image from "next/image"

export default function Rodape(){

    return(
        <footer>
            <p>Todos os direitos</p>
            <Image
                src='/logo.png' 
                width={100}
                height={30}
                alt="logo"
            />
        </footer>
    )
}