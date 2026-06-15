require("dotenv").config();

const app = require("./src/app");

const sequelize =
require("./src/config/database");

sequelize.sync()
.then(() => {

  console.log("Banco conectado");

  app.listen(
    process.env.PORT,
    () => {

      console.log(
        `Servidor rodando na porta ${process.env.PORT}`
      );
    }
  );

})
.catch(console.error);