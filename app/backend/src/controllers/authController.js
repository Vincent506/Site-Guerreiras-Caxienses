const bcrypt = require("bcryptjs");
const User = require("../models/User");

async function register(req, res) {
  try {

    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({
        error: "Todos os campos são obrigatórios"
      });
    }

    const usuarioExistente =
      await User.findOne({
        where: { email }
      });

    if (usuarioExistente) {
      return res.status(400).json({
        error: "Email já cadastrado"
      });
    }

    const senhaHash =
      await bcrypt.hash(senha, 10);

    const usuario =
      await User.create({
        nome,
        email,
        senha: senhaHash
      });

    return res.status(201).json({
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Erro interno"
    });
  }
}

module.exports = {
  register
};