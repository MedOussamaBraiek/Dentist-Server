const express = require('express');
const patientController = require('../controllers/patientControllers');

const Router = express.Router();

Router.get('/', patientController.all_patients);

Router.post('/add', patientController.add_patient);

Router.put('/update:id', patientController.update_patient);

Router.get('/:id', patientController.get_patient);

Router.delete('/:id', patientController.delete_patient);

module.exports = Router;