'use strict'
const express = require('express')
const employeeRouter = express.Router()
const employeeController = require('../controllers/EmployeeController')


employeeRouter.route('/api/employees')
    .get((req, res) => employeeController.findAllEmployeeController(req, res))
    .post((req, res) => employeeController.createEmployeeController(req, res))
        
employeeRouter.route('/api/employee/:id')
    .get((req, res) => employeeController.findByIdEmployeeController(req, res))
    .delete((req, res) => employeeController.deleteByIdEmployeeController(req, res))
    .put((req, res) => employeeController.updateByIdEmployeeController(req, res))

module.exports = employeeRouter