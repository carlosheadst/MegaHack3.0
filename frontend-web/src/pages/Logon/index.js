import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi'
import {Link,useHistory} from 'react-router-dom'
import './styles.css';
import api from '../../services/api'
import heroesImg from '../../Assets/heroes.png';
import logoImg from '../../Assets/logo.png'


export default function Logon(){
    const [id, setId] = useState('')
    const [cnpj_estabelecimento, setCNPJ] = useState('')
    const [senha, setSenha] = useState('')
    const history=useHistory()

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.get(`estabelecimento/${cnpj_estabelecimento}`, {cnpj_estabelecimento, senha})
            console.log(response.data.cnpj)
            console.log(response.data.senha)
            // history.push('/profile')
        }
        catch(err){
            alert('falha no login tente novamente')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt="be The Hero"/>

            <form onSubmit={handleLogin}>
                <h1>Faça seu Logon</h1>
                <input
                 placeholder="CNPJ do seu estabelecimento"
                 value ={cnpj_estabelecimento}
                 onChange={e => setCNPJ(e.target.value)}
                 />

                 <input
                 placeholder ="Senha"
                 value ={senha}
                 onChange={e => setSenha(e.target.value)}
                 />

                <button className='button' type="submit">Entrar</button>
                <Link className="back-link" to='/register'>
                    <FiLogIn size ={16} color="FFF"/>
                    Não tenho cadastro
                </Link>
                </form>
            </section>
          
            <img src={heroesImg} alt="Heores"/>
        </div>
    );
}