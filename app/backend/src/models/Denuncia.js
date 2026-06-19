const { DataTypes } = require("sequelize");
const sequelize = require("../conf/database");

const Denuncia = sequelize.define("Denuncia", {

  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },

  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  local: {
    type: DataTypes.STRING,
    allowNull: false
  },

  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  },

  status: {
    type: DataTypes.ENUM(
      "aberta",
      "em_analise",
      "resolvida"
    ),
    defaultValue: "aberta"
  }

});

module.exports = Denuncia;