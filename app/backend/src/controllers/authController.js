const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.register = async (req, res) => {

  try {

    const senhaHash =
      await bcrypt.hash(req.body.senha, 10);

    const usuario =
      await User.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: senhaHash
      });

    return res.status(201).json(usuario);

  } catch (error) {

    return res.status(500).json({
      erro: error.message
    });
  }
};

const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {

  const usuario = await User.findOne({
    where: {
      email: req.body.email
    }
  });

  if (!usuario) {

    return res.status(404).json({
      erro: "Usuário não encontrado"
    });
  }

  const senhaValida =
    await bcrypt.compare(
      req.body.senha,
      usuario.senha
    );

  if (!senhaValida) {

    return res.status(401).json({
      erro: "Senha inválida"
    });
  }

  const token = jwt.sign(
    { id: usuario.id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return res.json({ token });
};