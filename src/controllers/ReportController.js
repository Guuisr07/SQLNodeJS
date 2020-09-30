//Criando um metodo de relatorio
//Importando do sequelize os operadores
const { Op } = require('sequelize');
const User = require('../models/User');

//Criando uma query
module.exports = {
  async show(req, res) {
    // Query para:
    // Encontrar todos os usuarios que tem email que termina com @gmail.com
    // Desses usuarios eu quero buscar todos que moram na rua "Rua Tutoia"
    // Desses usuarios eu quero buscar as tecnologias que comecam com React

    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: '%@gmail.com', //Op.iLike e um operador para retornar dados especificos de um usuario, nesse caso retornando so os que tem email com o final %gmail.com
        },
      },
      include: [
        {
          association: 'addresses',
          where: { street: 'Rua Tutoia' },
        }, //enderecos
        {
          association: 'techs',
          where: {
            name: {
              [Op.iLike]: 'React%',
            },
          },
        }, //tecnologias
      ],
    });

    return res.json(users);
  },
};
