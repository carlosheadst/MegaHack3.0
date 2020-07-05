import React,{useState} from 'react'
import './style.css'
import logoImg from '../../Assets/logo.png'
import {Link,useHistory} from 'react-router-dom'
import{FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'

export default function Register(){
    const[nome, setName] = useState('');
    const[email, setEmail] = useState('');
    const[numero, setWhatsapp] = useState('');
    const[local, setEndereco] = useState('');
    const[cnpj, setCnpj] = useState('');
    const[senha, setSenha] = useState('');
const history = useHistory();
    async function handleRegister(e){
        e.preventDefault();

       const data=({
            nome,
            email,
            numero,
            local,
            cnpj,
            senha
        })
        try{
            const response = await api.post('estabelecimento',data)
            history.push('/')
        }
        catch(err){
            alert('Erro no cadastro, tente novamente.')
        }
       
    }
    return(
    <div className="register-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Breja finder"/>
                <h1>Cadastro</h1>
                <p>Faça o cadastro do seu estabelecimento e divulgue seus eventos. </p>
                <Link className="back-link" to='/' color="c41c27">
                    <FiArrowLeft size ={16} color="E02041"/>    
                    <h3>Já possuo cadastro </h3>
                </Link>
            </section>

            <form onSubmit={handleRegister} >
                <input 
                    placeholder ="Nome do estabelecimento"
                    value={nome}
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    placeholder="Whatsapp"
                    value={numero}
                    onChange={e => setWhatsapp(e.target.value)}
                />
            <div className="input-group">
                <input 
                    placeholder="Endereço"
                    value={local}
                    onChange={e => setEndereco(e.target.value)}/>
                <input 
                    placeholder="CNPJ"
                    value={cnpj}
                    onChange={e => setCnpj(e.target.value)}/>
                <input 
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}/>
            </div>
                <button className="button"type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}
