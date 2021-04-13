//Sistema desenvolvido para o servidor do Grupo DETAE
//chamada da porta, as rotas são feitas no routes

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//após conclusão adicionar um origin com o server
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);