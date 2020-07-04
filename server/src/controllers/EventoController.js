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

        const eventos = {
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
            insertedIds = await trx('Evento').insert(eventos)
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
            ...eventos,
        })
    }
}

module.exports = EventoController