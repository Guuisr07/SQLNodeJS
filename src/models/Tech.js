const { Model, DataTypes } = require('sequelize');

class Tech extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: 'techs',
      }
    );
  }

  static associate(models) {
    //Aqui e usado o belongsToMany porque e um relacionamento de N-N. Um usuario pode ter varias tecnologias e uma tecnologias pode estar associada a varios usuarios
    this.belongsToMany(models.User, {
      //Aqui e usado o through para dizer qual a tabela que vai estar o relacionamento entre os usuarios e as tecnologias
      foreignKey: 'tech_id',
      through: 'user_techs',
      as: 'users',
    });
  }
}

module.exports = Tech;
