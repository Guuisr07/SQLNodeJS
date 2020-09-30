const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

//Primeiro passo e criar o arquivo de rotas depois da configuracao base nessa pagina
//Proximo passo, criar a pasta database com as configuracoes do banco e a conexao com o mesmo
//Devemos criar tambem o arquivo sequelizerc para que ele entenda quais sao as configuracoes da nossa aplicacao
//para se conectar com o banco
//Devemos criar uma pasta models para mostrar como sera a insercao de dados na tabela
