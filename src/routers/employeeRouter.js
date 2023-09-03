'use strict'
const express = require('express')
const employeeRouter = express.Router()
const employeeController = require('../controllers/employeeController')


employeeRouter.route('/api/employees')
    .get((req, res) => employeeController.getEmployees(req, res))
    .post((req, res) => employeeController.createEmployee(req, res))

employeeRouter.route("/api/employee")
    .put((req, res) => employeeController.updateEmployee(req, res))
    
employeeRouter.route('/api/employee/:id')
    .get((req, res) => employeeController.getEmployee(req, res))
    .delete((req, res) => employeeController.deleteEmployeeByMat(req, res))

module.exports = employeeRouter