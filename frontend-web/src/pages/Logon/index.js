import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import './styles.css';
import api from '../../services/api'
import heroesImg from '../../Assets/heroes.png';
import logoImg from '../../Assets/logo.png'
import slogan from '../../Assets/slogan.png'


export default function Logon(){
    const [cnpj, setCNPJ] = useState('')
    const [senha, setSenha] = useState('')
    const history = useHistory()

    async function handleLogin(e){
        e.preventDefault()
        try{
            const response = await api.get(`estabelecimento/logon/${cnpj}/${senha}`, {cnpj, senha})
            if(response.data.logar) {
                history.push('/profile', response.data)
            } else {
                alert("CNPJ ou senha incoretos")
            }
        }
        catch(err){
            alert('falha no login tente novamente')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt="brejinha"/>

            <form onSubmit={handleLogin}>
                <h1>Faça seu Logon</h1>
                <input
                 placeholder="CNPJ do seu estabelecimento"
                 value ={cnpj}
                 onChange={e => setCNPJ(e.target.value)}
                 />

                 <input
                 placeholder ="Senha"
                 value ={senha}
                 type="password"
                 onChange={e => setSenha(e.target.value)}
                 />

                <button className='button' type="submit">Entrar</button>
                <Link className="back-link" to='/register'>
                    <FiLogIn size ={16} color="FFF"/>
                    Não tenho cadastro
                </Link>
                </form>
            </section>
            <div>
            <img className='cerveja' src={heroesImg} alt="Heroes"/>
            <img className='slogan' src={slogan} alt="slogan"/>
            </div>
        </div>
    );
}