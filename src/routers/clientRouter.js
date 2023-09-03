'use strict'
const express = require('express')
const clientRouter = express.Router()
const clientController = require('../controllers/clientController')


clientRouter.route('/api/clients')
    .get((req, res) => clientController.getClients(req, res))
    .post((req, res) => clientController.createClient(req, res))

clientRouter.route("/api/client").
    put((req, res) => clientController.updateClient(req, res))

clientRouter.route('/api/client/:id')
    .get((req, res) => clientController.getClient(req, res))
    .delete((req, res) => clientController.deleteClientByMat(req, res))

module.exports = clientRouter