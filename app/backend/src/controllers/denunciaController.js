const Denuncia =
require("../models/Denuncia");

exports.create = async (req, res) => {

  const denuncia =
    await Denuncia.create(req.body);

  return res.status(201).json(
    denuncia
  );
};

exports.list = async (req, res) => {

  const denuncias =
    await Denuncia.findAll();

  return res.json(
    denuncias
  );
};