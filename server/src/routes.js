const express = require('express')
const EstabelecimentoController = require('./controllers/EstabelecimentoController')
const UsuarioController = require('./controllers/UsuarioController')
const EventoControler = require('./controllers/EventoController')
const multer = require('multer')
const multerConfig = require('./config/multer')

const routes = express.Router()
const estabelecimentoController = new EstabelecimentoController
const usuarioController = new UsuarioController
const eventoController = new EventoControler
// const upload = multer(multerConfig)

// routes.get("/usuario/:id", usuarioController.show)
routes.get("/usuario", usuarioController.index)
routes.post("/usuario", usuarioController.create)

routes.get("/estabelecimento/logon/:cnpj/:senha", estabelecimentoController.logon)
routes.get("/estabelecimento", estabelecimentoController.index)
routes.post("/estabelecimento", estabelecimentoController.create)


routes.get("/evento", eventoController.index)
routes.post("/evento", eventoController.create)
routes.delete("/evento/:id", eventoController.delete)
module.exports = routes