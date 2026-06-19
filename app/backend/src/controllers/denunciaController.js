const Denuncia =
require("../models/Denuncia");

exports.create = async (req, res) => {

  try {

    const denuncia =
      await Denuncia.create(
        req.body
      );

    return res.status(201).json(
      denuncia
    );

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Erro ao criar denúncia"
    });
  }
};

exports.list = async (req, res) => {

  try {

    const denuncias =
      await Denuncia.findAll();

    return res.json(
      denuncias
    );

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Erro ao listar denúncias"
    });
  }
};

exports.getById = async (req, res) => {

  try {

    const denuncia =
      await Denuncia.findByPk(
        req.params.id
      );

    if (!denuncia) {

      return res.status(404).json({
        error: "Denúncia não encontrada"
      });
    }

    return res.json(
      denuncia
    );

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Erro ao buscar denúncia"
    });
  }
};

exports.update = async (req, res) => {

  try {

    const denuncia =
      await Denuncia.findByPk(
        req.params.id
      );

    if (!denuncia) {

      return res.status(404).json({
        error: "Denúncia não encontrada"
      });
    }

    await denuncia.update(
      req.body
    );

    return res.json(
      denuncia
    );

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Erro ao atualizar denúncia"
    });
  }
};

exports.delete = async (req, res) => {

  try {

    const denuncia =
      await Denuncia.findByPk(
        req.params.id
      );

    if (!denuncia) {

      return res.status(404).json({
        error: "Denúncia não encontrada"
      });
    }

    await denuncia.destroy();

    return res.json({
      message: "Denúncia removida"
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Erro ao remover denúncia"
    });
  }
};