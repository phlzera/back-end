const DadosInvalidosError = require("../Errors/DadosInvalidosError");
const models = require("../models");
const camposValidos = [
  "nome",
  "sobrenome",
  "documento",
  "dataNascimento",
  "responsavel",
];

function validarCampos(body) {
  let camposValidados = {};
  camposValidos.forEach((campo) => {
    const valor = body[campo];
    if (campo === "dataNascimento") {
      const dataNascimento = Date.parse(valor);
      return (camposValidados = {
        ...camposValidados,
        dataNascimento: dataNascimento,
      });
    } else {
      camposValidados = { ...camposValidados, [campo]: valor };
    }
  });
  return camposValidados;
}

module.exports = {
  async getAll(req, res) {
    const resultado = models.Pacientes.findAll();
    res.status(200).json(resultado);
  },

  async create(req, res) {
    try {
      const { body } = req;

      const camposValidados = validarCampos(body);
      if (Object.keys(camposValidados).length === 0) {
        throw new DadosInvalidosError("Não foram fornecidos dados válidos!");
      }

      const resultado = await models.Pacientes.create(camposValidados);
      return res.status(201).json(resultado);
    } catch (error) {
      return res
        .status(400)
        .json({ mensagem: error.message, idError: error.idError });
    }
  },
};
