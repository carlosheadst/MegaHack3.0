const {Request, Response} = require('express')
const knex = require('../database/connection')

class ProdutoController{

    async index (request, response) {

        const produtos = await knex('Estabelecimento').select('*')

        return response.json(produtos)
    }

    async show (request, response) {
        const { id } = request.params

        const produtos = await knex('Estabelecimento').where('id', id).first()

        if(!produtos) {
            return response.status(400).json({message: 'Ponto não encontrado.'})
        }

        const items = await knex('items')
        .join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.point_id', id)
        .select('items.title');

        const serializedPoint = {
            ...point,
            image_url: `http://192.168.0.105:3333/uploads/${point.image}`
        }
        

        return response.json({ point: serializedPoint, items })
    }

    async create (request, response) {

        const {
            nome_produto,
            desc_produto,
            preco_produto,
            qtd_produto,
        } = request.body
    
        const trx = await knex.transaction()

        const produto = {
            nome_produto,
            desc_produto,
            preco_produto,
            qtd_produto,
        }

        const insertedIds = await trx('Produto').insert(produto)
    
        const id_produto = insertedIds[0]

        await trx.commit()
    
        return response.json({
            id: id_produto,
            ...produto,
        })
    }
}

module.exports = ProdutoController