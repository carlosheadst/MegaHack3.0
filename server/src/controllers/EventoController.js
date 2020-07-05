const {Request, Response} = require('express')
const knex = require('../database/connection')

class ItemsController{
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

        const insertedIds = await trx('Evento').insert(eventos)
    
        const id_evento = insertedIds[0]

        await trx.commit()
    
        return response.json({
            id: id_evento,
            ...eventos,
        })
    }
}

module.exports = ItemsController