import React, {useState, useEffect } from 'react';
import logoImg from '../../Assets/logo.png'
import {Link,useHistory, useLocation} from 'react-router-dom'
import {FiPower,FiTrash2} from 'react-icons/fi'
import './style.css'
import api from '../../services/api'
export default function Profile(){

    const[events,setEvents] = useState([])
    const history = useHistory()
    const location = useLocation()

    useEffect(()=>{
        setEvents(location.state.eventos)
    },[location])

    async function handleDeleteInsident(id){
        try{
            setEvents(events.filter(event => event.id !== id))
        }catch(err){
            alert('Erro ao deletar caso, tente novamente')
        }
    }

    function handleLogout(){
        localStorage.clear()
        history.push('/')
    }
    return(

        <div className="profile-container">
        <header>
           <img src={logoImg} alt="Be the Hero"/>
           <span>Bem vindo(a), {location.state.estabelecimento[0].nome}</span>
           <Link className='button'to='/event/new'>Cadastrar novo evento </Link>
           <button onClick={handleLogout}type='button'>
               <FiPower size={18} color="yellow"/>
           </button>
        </header>
        <h1>Eventos cadastrados</h1>
        <ul>
        {events.map(event =>(
            <li key ={event.id}>
            <strong>Evento</strong>
           <p>{event.nome}</p>

            <strong>Descrição</strong>
            <p>{event.descricao}</p>

            <strong>Valor</strong>
            <p>{Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(event.valor_entrada)}</p>

            <button onClick = {()=>handleDeleteInsident(event.id)}type='button'>
               <FiTrash2 size={20} color="#a8a8b3"/>
            </button>
            <strong>Imagens do local</strong>
        </li>
        ))}
        </ul>
    </div>
   );
}