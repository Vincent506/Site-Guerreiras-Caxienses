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
    type: DataTypes.STRING,
    defaultValue: "aberta"
  }
});

module.exports = Denuncia;