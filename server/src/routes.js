const express = require('express')
const EstabelecimentoController = require('./controllers/EstabelecimentoController')
const UsuarioController = require('./controllers/UsuarioController')
const ProdutoController = require('./controllers/ProdutoController')
const EventoControler = require('./controllers/EventoController')
const multer = require('multer')
const multerConfig = require('./config/multer')

const routes = express.Router()
const estabelecimentoController = new EstabelecimentoController
const usuarioController = new UsuarioController
const produtoController = new ProdutoController
const eventoController = new EventoControler
// const upload = multer(multerConfig)

// routes.get("/usuario/:id", usuarioController.show)
routes.get("/usuario", usuarioController.index)
routes.post("/usuario", usuarioController.create)

routes.get("/estabelecimento/:cnpj", estabelecimentoController.show)
routes.get("/estabelecimento", estabelecimentoController.index)
routes.post("/estabelecimento", estabelecimentoController.create)

routes.post("/produto", produtoController.create)

routes.get("/evento", eventoController.index)
routes.post("/evento", eventoController.create)

module.exports = routes