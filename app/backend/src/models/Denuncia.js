const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Denuncia = sequelize.define("Denuncia", {

  tipo: {
    type: DataTypes.STRING
  },

  descricao: {
    type: DataTypes.TEXT
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: "aberta"
  }
});

module.exports = Denuncia;