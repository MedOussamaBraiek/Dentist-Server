const express = require('express');
const Router = express.Router();

const userController = require('../controllers/userControllers');

Router.post('/login', userController.login);

module.exports = Router;