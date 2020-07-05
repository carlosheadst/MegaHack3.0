import React,{ useState, useEffect } from 'react'
import {Link,useHistory, useLocation} from 'react-router-dom'
import './style.css'
import logoImg from '../../Assets/logo.png'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'


export default function NewEvent(){
    const [nome,setNome] = useState('')
    const [descricao,setDescricao] = useState('')
    const [local,setLocal] = useState('')
    const [horarioInicio, setHorarioInicio] = useState('')
    const [horarioTermino, setHorarioTermino] = useState('')
    const [valor,setValor] = useState(0)
    const [idEstabelecimento, setIdEstabelecimento] = useState(0)
    const history = useHistory()
    const location = useLocation()

    async function handleNewEvent(e){
        e.preventDefault()
        const data ={
            nome,
            descricao,
            local,
            horarioInicio,
            horarioTermino,
            valor,
            idEstabelecimento,
        }

        try{
            await api.post('evento', data)
            history.push('/profile')
        } catch{
            alert('erro ao cadastrar caso, tente novamente')
        }
    }

    useEffect(() => {
        console.log(location.state)
        setIdEstabelecimento(location.state)
    }, [location])

    return(
    <div className="new-event-container">
    <div className="content">
        <section>
            <img src={logoImg} alt="Breja Finder"/>
            <h1>Cadastrar novo evento</h1>
            <p>Descreva o evento detalhadamente para divulga-lo.</p>
            <Link className="back-link" to='/Profile'>
                <FiArrowLeft size ={16} color="E02041"/>
                <h3>Voltar para home</h3>
            </Link>
        </section>
        <form onSubmit={handleNewEvent} >

            <input
             placeholder ="Nome do evento"
             value={nome}
             onChange={e => setNome(e.target.value)}
             />

             <input
             placeholder="Endereço do evento"
             value={local}
             onChange={e => setLocal(e.target.value)}
             />

            <textarea 
             placeholder="Descrição do evento"
             value={descricao}
             onChange={e => setDescricao(e.target.value)}
             />

            <input 
             placeholder="Horario Inicio"
             value={horarioInicio}
             onChange={e => setHorarioInicio(e.target.value)}
             />

            <input 
             placeholder="Horario Termino"
             value={horarioTermino}
             onChange={e => setHorarioTermino(e.target.value)}
             />

            <input
             placeholder="Valor da entrada"
             value={valor}
             onChange={e => setValor(e.target.value)}
             />
            
            <button className="button"type="submit">Cadastrar</button>
        </form>
    </div>
</div>
)
}
