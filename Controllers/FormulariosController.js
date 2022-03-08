const models = require("../models");
const camposValidos = [
  "autor",
  "paciente",
  "sistolica",
  "diastolica",
  "pulso",
  "saturacao",
  "temperatura",
  "anotacao",
];

function validarCampos(body) {
  let camposValidados = {};
  camposValidos.forEach((campo) => {
    const valor = body[campo];
    camposValidados = { ...camposValidados, [campo]: valor };
  });
  return camposValidados;
}

module.exports = {
  async create(req, res) {
    try {
      const { body } = req;
      const camposValidados = validarCampos(body);

      if (Object.keys(camposValidados).length == 0) {
        throw new DadosInvalidosError("Não foram fornecidos dados válidos!");
      }

      const resultado = models.Formulario.create(camposValidados);
      return res.status(201).json(resultado);
    } catch (error) {
      res.status(400).json();
    }
  },

  async getAll(req, res) {
    try {
      const resultado = await models.Formularios.findAll();
      res.status(200).json(resultado);
    } catch (error) {
      res.status(400).json({ mensagem: error.message });
    }
  },
};
