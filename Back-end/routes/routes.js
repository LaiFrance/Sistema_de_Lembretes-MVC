const routes= require('express').Router();
const LembrentesController = require('../controller/LembrentesController');

routes.get('/', LembrentesController.getAll);

module.exports = routes;