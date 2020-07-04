import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import './style.css'
import logoImg from '../../Assets/logo.png'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'


export default function NewEvent(){
    const [titulo,setTitulo] = useState('');
    const [endereco,setEndereco] = useState('');
    const [descricao,setDescricao] = useState('');
    const [valor,setValor] = useState('');
    const ongid = localStorage.getItem('ongId');
    const history = useHistory()

    async function handleNewIncident(e){
        e.preventDefault();
        const data ={
            titulo,
            endereco,
            descricao,
            valor,
          
        };
        try{
            await api.post('events',data,{
                headers:{
                    Authorization:ongid,
                }
            })
        history.push('/profile')
        } catch{
            alert('erro ao cadastrar caso, tente novamente')
        }
    }

    return(
    <div className="new-event-container">
    <div className="content">
        <section>
            <img src={logoImg} alt="Be The Hero"/>
            <h1>Cadastrar novo evento</h1>
            <p>Descreva o evento detalhadamente para divulga-lo.</p>
            <Link className="back-link" to='/Profile'>
                <FiArrowLeft size ={16} color="E02041"/>
                <h3>Voltar para home</h3>
            </Link>
        </section>
        <form onSubmit={handleNewIncident} >
            <input
             placeholder ="Titulo do evento"
             value={titulo}
             onChange={e=>setTitulo(e.target.value)}
             />
             <input
             placeholder="Endereço do evento"
             value={endereco}
             onChange={e=>setEndereco(e.target.value)}
             />
            <textarea 
             placeholder="Descrição do evento"
             value={descricao}
             onChange={e=>setDescricao(e.target.value)}
             />
            <input
             placeholder="Valor da entrada"
             value={valor}
             onChange={e=>setValor(e.target.value)}
             />
            
            <button className="button"type="submit">Cadastrar</button>
        </form>
    </div>
</div>
    )
}
