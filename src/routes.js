const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

//Para criar um endereco e necessario ter um usuario sempre por isso e usado o conceito
//de rota encadeada, ficando assim a rota addresses:
routes.post('/users/:user_id/addresses', AddressController.store);
//Para listar um determinado endereco
routes.get('/users/:user_id/addresses', AddressController.index);

routes.post('/users/:user_id/techs', TechController.store);
routes.get('/users/:user_id/techs', TechController.index);

//Rota para deletar uma tecnologia de um usario
routes.delete('/users/:user_id/techs', TechController.delete);

//Rota para mostrar o relatorio das tabelas
routes.get('/report', ReportController.show);

module.exports = routes;

//Para dar autoimports pode se usar um framework chamado consign ou query-builder
