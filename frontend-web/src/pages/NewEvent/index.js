import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import './style.css'
import logoImg from '../../Assets/logo.png'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'


export default function NewEvent() {
    const [nome, setTitulo] = useState('');
    const [local, setEndereco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor_entrada, setValor] = useState('');
    const [horario_inicio, setHorarioInicio] = useState('');
    const [horario_termino, setHorarioTermino] = useState('');
    const history = useHistory()
    const location = useLocation()

    async function handleNewIncident(e) {
        e.preventDefault()
        const data = {
            nome,
            descricao,
            local,
            valor_entrada,
            horario_inicio,
            horario_termino,
            id_estabelecimento: location.state
        }

        try {
            await api.post('evento', data).then(res => {
                console.log(res)
            })
            history.push('/profile')
        } catch{
            alert('erro ao cadastrar caso, tente novamente')
        }
        console.log(location)
    }

    return (
        <div className="new-event-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Breja Finder" />
                    <h1>Cadastrar novo evento</h1>
                    <p>Descreva o evento detalhadamente para divulga-lo.</p>
                    <Link className="back-link" to='/Profile'>
                        <FiArrowLeft size={16} color="E02041" />
                        <h3>Voltar para home</h3>
                    </Link>
                </section>
                <form onSubmit={handleNewIncident} >
                    <input
                        placeholder="Titulo do evento"
                        value={nome}
                        onChange={e => setTitulo(e.target.value)}
                    />
                    <input
                        placeholder="Endereço do evento"
                        value={local}
                        onChange={e => setEndereco(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição do evento"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />
                    <input
                        placeholder="Valor da entrada"
                        value={valor_entrada}
                        onChange={e => setValor(e.target.value)}
                    />
                    <textarea
                        placeholder="Horário de Início"
                        value={horario_inicio}
                        onChange={e => setHorarioInicio(e.target.value)}
                    />
                    <textarea
                        placeholder="Horário de Término"
                        value={horario_termino}
                        onChange={e => setHorarioTermino(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
