const { Request, Response } = require('express')
const knex = require('../database/connection')

class EventoController {
    async index(request, response) {

        var eventos

        try {
            eventos = await knex('Evento').select('*')
        } catch (error) {
            return response.json({
                errorMessage: error.message
            })
        }

        return response.json(eventos)
    }

    async create(request, response) {

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

    async delete(request, response) {
        const { id } = request.params

        try {
            knex('Evento').where('id', id).del().then(res => {
                return response.json({
                    deleted: res === 1 ? true : false
                })
            })
        } catch (error) {
            trx.rollback()
            return response.json({
                errorMessage: error.message
            })
        }
    }
}

module.exports = EventoController