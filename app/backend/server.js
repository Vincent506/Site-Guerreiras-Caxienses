require("dotenv").config({
  path: "./config.env"
});

const sequelize = require("./src/conf/database");
const app = require("./src/app");

require("./src/models/User");
require("./src/models/Denuncia");

async function start() {
  try {
    await sequelize.authenticate();

    console.log("✅ Banco conectado");

    await sequelize.sync({
      alter: true,
    });

    app.listen(process.env.PORT, () => {
      console.log(
        `🚀 API rodando em http://localhost:${process.env.PORT}`
      );
    });

  } catch (error) {
    console.error(error);
  }
}

start();