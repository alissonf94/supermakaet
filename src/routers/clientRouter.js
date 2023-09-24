'use strict'
const express = require('express')
const clientRouter = express.Router()
const clientController = require('../controllers/ClientController')


clientRouter.route('/api/clients')
    .get((req, res) => clientController.findAllClientsController(req, res))
    .post((req, res) => clientController.createClientController(req, res))

clientRouter.route('/api/client/:id')
    .put((req, res) => clientController.updateByIdClientController(req, res))
    .get((req, res) => clientController.findByIdClientController(req, res))
    .delete((req, res) => clientController.deleteByIdClientController(req, res))

module.exports = clientRouter