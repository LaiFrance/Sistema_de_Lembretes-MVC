const routes= require('express').Router();
const LembrentesController = require('../controller/LembrentesController');


routes.get('/', LembrentesController.getAllLembrentes);
routes.post('/create', LembrentesController.createLembrete);
routes.get('/getById/:id', LembrentesController.getById);
routes.post('/updateOne/:id', LembrentesController.updateOneLembrete);

module.exports = routes;