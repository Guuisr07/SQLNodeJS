//Criando a pasta controller, para ser criado os metodos de requisicao e resposta
//para as rotas , criando de inicio a rota de cadastro
const User = require('../models/User');
module.exports = {
  //Metodo para mostar todos os usuarios
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  //Metodo para criacao de usuario
  async store(req, res) {
    //E usado o store para armazenar um usuario
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    return res.json(user);
  },
};
