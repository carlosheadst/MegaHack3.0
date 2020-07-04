const { request, response} = require('express')
const knex = require('../database/connection')

class UsuarioController {

    async index (request, response) {
        const usuarios = await knex('Usuario').select('*')

        return response.json(usuarios)
    }

    async create (request, response) {
        const {
            cpf,
            nome_usuario,
            idade,
            email,
            sexo,
            foto_usuario
        } = request.body

        const trx = await knex.transaction()

        const usuario = {
            cpf,
            nome_usuario,
            idade,
            email,
            sexo,
            foto_usuario
        }

        await trx('Usuario').insert(usuario)

        await trx.commit()

        return response.json(usuario)
    }
}

module.exports = UsuarioController