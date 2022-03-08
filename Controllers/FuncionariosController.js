const DadosInvalidosError = require("../Errors/DadosInvalidosError");
const models = require("../models");
const camposValidos = ["nome", "sobrenome", "registro", "senhaHash", "nivel"];

// verifica os dados passados no corpo da requisicao
function validarCampos(body) {
  let camposValidados = {};

  camposValidos.forEach((campo) => {
    const valor = body[campo];
    camposValidados = { ...camposValidados, [campo]: valor };
  });
  return camposValidados;
}
module.exports = {
  async getAll(req, res) {
    try {
      const resultado = await models.Funcionarios.findAll();
      return res.status(200).json(resultado);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },

  async create(req, res) {
    try {
      const { body } = req;
      const camposValidados = validarCampos(body);

      if ((Object.keys(camposValidados).length = 0)) {
        throw new DadosInvalidosError("Não foram passados dados válidos");
      }
      const resultado = await models.Funcionarios.create(camposValidados);
      return res.status(201).json(resultado);
    } catch (error) {
      return res.status(400).json();
    }
  },
};
