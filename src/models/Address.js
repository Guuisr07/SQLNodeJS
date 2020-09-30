//Importando model de dentro do sequelize, e o Datatypes para as colunas
const { Model, DataTypes } = require('sequelize');

class Address extends Model {
  //Padrao do sequelize para receber a conexao com a base de dados
  static init(sequelize) {
    super.init(
      {
        //Devemos passar as colunas da tabela addresses
        zipcode: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
  //Criando o relacionamente para que o models entenda como e o relacionamento
  // questoes como 1 N , N N
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' }); //Deve informar qual a coluna da tabela sera feito o relacionamento e qual o nome do relacionamento
  }
}

module.exports = Address;
