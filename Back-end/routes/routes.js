const routes= require('express').Router();
const LembrentesController = require('../controller/LembrentesController');


routes.get('/', LembrentesController.getAllLembrentes);
routes.post('/create', LembrentesController.createLembrete);

module.exports = routes;