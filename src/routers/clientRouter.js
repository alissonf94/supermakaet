'use strict'
const express = require('express')
const clientRouter = express.Router()
const clientController = require('../controllers/ClientController')


clientRouter.route('/api/clients')
    .get((req, res) => clientController.getClients(req, res))
    .post((req, res) => clientController.createClient(req, res))

clientRouter.route('/api/client/:id')
    .put((req, res) => clientController.updateClient(req, res))
    .get((req, res) => clientController.getClient(req, res))
    .delete((req, res) => clientController.deleteClientById(req, res))

module.exports = clientRouter