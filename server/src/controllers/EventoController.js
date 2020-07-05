const {Request, Response} = require('express')
const knex = require('../database/connection')

class EventoController{
    async index (request, response) {

        const eventos = await knex('Evento').select('*')
    
        return response.json(eventos)
    }

    async create (request, response) {

        const {
            nome,
            descricao,
            local,
            horario_inicio,
            horario_termino,
            valor_entrada,
            id_estabelecimento
        } = request.body

        if (id_estabelecimento == null || id_estabelecimento == "")
            return response.json({
                errorMessage: "O id do estabelecimento não pode ser nulo"
            })
    
        const trx = await knex.transaction()

        const evento = {
            nome,
            descricao,
            local,
            horario_inicio,
            horario_termino,
            valor_entrada,
            id_estabelecimento
        }

        var insertedIds = null

        try {
            insertedIds = await trx('Evento').insert(evento)
        } catch (error) {
            await trx.rollback()
            return response.json({
                errorMessage: error.message
            })
        }
    
        const id = insertedIds[0]

        await trx.commit()
    
        return response.json({
            id: id,
            ...evento,
        })
    }

    // async update (request, response) {

    //     const {
    //         id,
    //         nome,
    //         descricao,
    //         local,
    //         horario_inicio,
    //         horario_termino,
    //         valor_entrada
    //     } = request.body

    //     if (id == null || id == "")
    //         return response.json({
    //             errorMessage: "O id do evento não pode ser nulo"
    //         })

    //     const trx = await knex.transaction()
    //     var x = null
    //     var oldEvento = null

    //     try {
    //         var oldEvento = await knex('Evento').where('id', id)
    //         // oldEvento = JSON.parse(JSON.stringify(result))[0]

    //         oldEvento[0].nome = nome != null && nome != "" ? nome : oldEvento.nome
    //         oldEvento[0].descricao = descricao != null && descricao != "" ? descricao : oldEvento.descricao
    //         oldEvento[0].local = local != null && local != "" ? local : oldEvento.local
    //         oldEvento[0].horario_inicio = horario_inicio != null && horario_inicio != "" ? horario_inicio : oldEvento.horario_inicio
    //         oldEvento[0].horario_termino = horario_termino != null && horario_termino != "" ? horario_termino : oldEvento.horario_termino
    //         oldEvento[0].valor_entrada = valor_entrada != null && valor_entrada != "" ? valor_entrada : oldEvento.valor_entrada
            
    //         console.log('oldevento',oldEvento)

    //         x = trx('Evento').update(JSON.stringify(oldEvento))

    //         // console.log('x', x)

    //     } catch (error) {
    //         await trx.rollback()
    //         return response.json({
    //             errorMessage: error.message,
    //             x: oldEvento
    //         })
    //     }

    //     await trx.commit()
    //     return response.json({
    //         x: x
    //     })
    // }
}

module.exports = EventoController