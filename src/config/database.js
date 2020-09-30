module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '1234',
  database: 'sqlnode',
  define: {
    timestamps: true,
    underscored: true,
  },
};

//O timestamps serve para poder utilizar na tabela o campo created_at, updated_at
//Underscored para digitar com underline user_group e nao UserGroup
