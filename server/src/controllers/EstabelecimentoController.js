const { randomBytes } = require('crypto')
const knex = require('../database/connection')

class PointsController {

    async index(request, response) {

        const estabelecimentos = await knex('Estabelecimento').select('*')

        return response.json(estabelecimentos)
    }

    async logon(request, response) {
        const { cnpj, senha } = request.params

        var estabelecimento = null

        try {
            estabelecimento = await knex('Estabelecimento').where({ 'cnpj': cnpj, 'senha': senha })
        } catch (error) {
            return response.json({
                errorMessage: error.message
            })
        }

        return estabelecimento[0] != null ? response.json({ logar: true, estabelecimento: estabelecimento }) : response.json({ logar: false, estabelecimento: null })
    }

    async create(request, response) {

        const {
            nome,
            cnpj,
            numero,
            email,
            local,
            senha
        } = request.body

        const trx = await knex.transaction()

        const estabelecimento = {
            nome,
            cnpj,
            numero,
            email,
            local,
            senha
        }

        var insertedIds = null

        try {
            insertedIds = await trx('Estabelecimento').insert(estabelecimento)
        }
        catch (error) {
            return response.json({
                errorMessage: error.message
            })
        }

        const id = insertedIds[0]

        await trx.commit()

        return response.json({
            id: id,
            ...estabelecimento,
        })
    }
}

module.exports = PointsController