'use strict'
const express = require('express')
const employeeRouter = express.Router()
const employeeController = require('../controllers/employeeController')

employeeRouter.route('/api/employees')
    .get((req, res) => employeeController.getEmployees(req, res))
    .post((req, res) => employeeController.createEmployee(req, res))
    .put((req, res) => employeeController.updateEmployee(req, res))
employeeRouter.route('/api/employees/:id')
    .get((req, res) => employeeController.getEmployee(req, res))
    .delete((req, res) => employeeController.deleteEmployeeByMat(req, res))

module.exports = employeeRouter