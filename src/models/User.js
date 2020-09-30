//Importando model de dentro do sequelize, e o Datatypes para as colunas
const { Model, DataTypes } = require('sequelize');

class User extends Model {
  //Padrao do sequelize para receber a conexao com a base de dados
  static init(sequelize) {
    super.init(
      {
        //Devemos passar as colunas da tabela users
        name: DataTypes.STRING,
        email: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' }); //Deve informar qual a coluna da tabela sera feito o relacionamento e qual o nome do relacionamento
    this.belongsToMany(models.Tech, {
      foreignKey: 'user_id',
      through: 'user_techs',
      as: 'techs',
    });
  }
}

module.exports = User;
