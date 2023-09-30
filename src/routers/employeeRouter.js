'use strict'
const express = require('express')
const employeeRouter = express.Router()
const employeeController = require('../controllers/EmployeeController')
const verifyEmployee = require('../middlewares/VerifyEmployee')

employeeRouter.route('/api/employees')
    .get(verifyEmployee, (req, res) => employeeController.findAllEmployeeController(req, res))
    .post((req, res) => employeeController.createEmployeeController(req, res))
        
employeeRouter.route('/api/employee/:id')
    .get(verifyEmployee, (req, res) => employeeController.findByIdEmployeeController(req, res))
    .delete(verifyEmployee, (req, res) => employeeController.deleteByIdEmployeeController(req, res))
employeeRouter.route('/api/employee')
    .put(verifyEmployee, (req, res) => employeeController.updateByIdEmployeeController(req, res))

module.exports = employeeRouter