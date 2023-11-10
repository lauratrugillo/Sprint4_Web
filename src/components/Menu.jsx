"use client"

import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import './Components.scss'

export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav>
            <Link href="/">
                <Image 
                    src='/logo.png' 
                    width={190}
                    height={60}
                    alt="logo"
                    />
            </Link>
            <button className="menu-button" onClick={toggleMenu}></button>
        <div className={`navbar ${menuOpen ? 'open' : ''}`}>
            <Link href='/seguro' className="link" onClick={closeMenu}>
                Seguro
            </Link>
            <Link href='/duvidas' className="link" onClick={closeMenu}>
                Dúvidas
            </Link>
            <Link href='/integrantes' className="link" onClick={closeMenu}>
                Integrantes
            </Link>
            <Link href='/bicicletas' className="link" onClick={closeMenu}>
                Bicicletas
            </Link>
        </div>
        </nav>
    )
}

