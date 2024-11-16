'use client';
import { useState } from 'react';

const CadastroForm = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const aoSubmeter = (evento) => {
        evento.preventDefault();
        //TODO: Enviar os dados para a API
        const dadosDoFormulario = new FormData(evento.target);
        const dados = {
            nome: dadosDoFormulario.get('nome'),
            email: dadosDoFormulario.get('email'),
            senha: dadosDoFormulario.get('senha'),
        };
        console.log(dados);
    }

    const aoAlterarValores = (evento) => {
        const { name, value } = evento.target;
        if (name === 'nome') {
            setNome(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'senha') {
            setSenha(value);
        }
    }

    return (
        <form onSubmit={aoSubmeter}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" onChange={aoAlterarValores} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={aoAlterarValores} />
            </div>
            <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" name="senha" onChange={aoAlterarValores} />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default CadastroForm;