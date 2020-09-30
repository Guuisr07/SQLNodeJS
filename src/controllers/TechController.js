const Tech = require('../models/Tech');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    //Join para mostrar a tecnologia de um usuario
    const user = await User.findByPk(user_id, {
      include: {
        association: 'techs',
        attributes: ['name'],
        through: { attributes: [] },
      },
    });

    return res.json(user.techs);
  },

  //Metodo para criar uma tecnologia
  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const [tech] = await Tech.findOrCreate({
      //FindOrCreate serve para procurar, neste caso pelo nome de uma tecnologia se nao achar cria uma com o nome que foi procurado
      where: { name },
    });

    await user.addTech(tech); //Esse metodo add serve para adicionar dados quando tem relacionamento de muitos para muitos, relacionando uma tecnologia a um usuario quando criar esse dado

    return res.json(tech);
  },

  //Metodo para deletar a tecnologia de um usuario na tabela de relacionamento
  async delete(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const tech = await Tech.findOne({
      where: { name },
    });

    await user.removeTech(tech);

    return res.json();
  },
};
