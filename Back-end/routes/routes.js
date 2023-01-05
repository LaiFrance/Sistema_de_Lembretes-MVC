const routes= require('express').Router();
const LembrentesController = require('../controller/LembrentesController');


routes.get('/', LembrentesController.getAllLembrentes);
routes.post('/create', LembrentesController.createLembrete);
routes.get('/getById/:id', LembrentesController.getById);
routes.post('/updateOne/:id', LembrentesController.updateOneLembrete);
routes.get('/delete/:id', LembrentesController.confirmDeleteLembrete);

module.exports = routes;