'use strict'

// Cargamos el módulo de express para poder crear rutas
var express = require('express');

// Cargamos el controlador
var MessageController = require('../controllers/message');

// Llamamos al router
var api = express.Router();

// Llamamos al middleware para proteger la ruta
var mdl_auth = require('../middlewares/auth');

// Creamos una ruta para los métodos que tenemos en nuestros controladores
// Esta ruta recibe un parametro ID y es necesario que vaya autenticada
api.get('/message', mdl_auth.ensureAuth, MessageController.getMessages);
api.post('/message', mdl_auth.ensureAuth, MessageController.postMessage);

// Exportamos la configuración
module.exports = api;