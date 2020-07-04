const {randomBytes} = require('crypto')
const knex = require('../database/connection')

class PointsController{

    async index (request, response) {

        const estabelecimentos = await knex('Estabelecimento').select('*')

        return response.json(estabelecimentos)
    }

    async show (request, response) {
        const { cnpj } = request.params

        const estabelecimento = await knex('Estabelecimento').where('cnpj_estabelecimento', cnpj)

        if(!estabelecimento) {
            return response.status(400).json({message: 'Estabelecimento não encontrado.'})
        }
        

        return response.json(estabelecimento)
    }

    async create (request, response) {

        const {
            nome_estabelecimento,
            cnpj_estabelecimento,
            numero_estabelecimento,
            email_estabelecimento,
            local_estabelecimento,
            senha
        } = request.body
    
        const trx = await knex.transaction()

        const estabelecimento = {
            nome_estabelecimento,
            cnpj_estabelecimento,
            numero_estabelecimento,
            email_estabelecimento,
            local_estabelecimento,
            senha
        }

        const insertedIds = await trx('Estabelecimento').insert(estabelecimento)
    
        const id_estabelecimento = insertedIds[0]

        await trx.commit()
    
        return response.json({
            id: id_estabelecimento,
            ...estabelecimento,
        })
    }
}

module.exports = PointsController