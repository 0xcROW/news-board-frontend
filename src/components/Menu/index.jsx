'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import './style.css';
import { Router } from 'next/router';

export default function Menu(){
    const [menuLateral, setMenuLateral] = useState(false);
    const router = useRouter();

    return (
        <>
            <nav className='menu'>
                <button onClick={() => {
                    setMenuLateral(!menuLateral);
                }}>Menu</button>
                <div>Logo</div>
                <button onClick={() => router.push('/login')}>Login/Cadastrar</button>
            </nav>

            {menuLateral && <div className='menuLateral'>
                <div className="fechar">
                    <button onClick={() => {
                        setMenuLateral(false);
                    }}>X</button>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Produtos</li>
                    <li>Contato</li>
                    <li>Sobre</li>
                </ul>
            </div>}
        </>
  );
}