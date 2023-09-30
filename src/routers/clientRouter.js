'use strict'
const express = require('express')
const clientRouter = express.Router()
const clientController = require('../controllers/ClientController')
const verifyEmployee = require('../middlewares/VerifyEmployee')

clientRouter.route('/api/clients')
    .get(verifyEmployee, (req, res) => clientController.findAllClientsController(req, res))
    .post((req, res) => clientController.createClientController(req, res))

clientRouter.route('/api/client/:id')
    .get(verifyEmployee, (req, res) => clientController.findByIdClientController(req, res))
    .delete(verifyEmployee,(req, res) => clientController.deleteByIdClientController(req, res))

clientRouter.route('/api/client').put((req, res) => clientController.updateByIdClientController(req, res))

module.exports = clientRouter