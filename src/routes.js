const express = require('express');

const sessionController = require('./Controllers/sessionController');
const sessionAdmController = require('./Controllers/sessionAdmController');
const userController = require('./Controllers/userController');
const commentController = require('./Controllers/commentController');
const profileController = require('./Controllers/profileController');
const admController = require('./Controllers/admController');
const commentAttController = require('./Controllers/commentAttController');
const feedBackController = require('./Controllers/feedBackController');

const routes = express.Router();

//rotas de login do usuário
routes.post('/session', sessionController.create);
//rotas de login do ADM
routes.post('/sessionAdm', sessionAdmController.create);

//rotas do usuário
routes.get('/users', userController.index);
routes.post('/users', userController.create);

//rotas dos posts (publicações/noticias)(feitas pelo usuário)
routes.get('/comment', commentController.index);
routes.post('/comment', commentController.create);
routes.delete('/comment/:id', commentController.delete);

//rotas do perfil do usuário
routes.get('/profile', profileController.index);

//rotas do Adm
routes.get('/adm', admController.index);
routes.post('/adm', admController.create);

//rotas dos posts de atividades (feita pela conta do ADM) 
routes.get('/commentAtt', commentAttController.index);
routes.post('/commentAtt', commentAttController.create);
routes.delete('/commentAtt/:id', commentAttController.delete);

//rotas dos comments deixados na pagina
routes.get('/feedback', feedBackController.index);
routes.post('/feedback', feedBackController.create);
routes.delete('/feedback/:id', feedBackController.delete);

module.exports = routes;