const models = require("../models");
const camposValidos = [
  "nome",
  "sobrenome",
  "documento",
  "telefone",
  "rua",
  "bairro",
  "numero",
  "cidade",
];
const DadosInvalidosError = require("../Errors/DadosInvalidosError");
const InvalidPrimaryKeyError = require("../Errors/InvalidPrimaryKeyError");

//verifica se os campos passados no corpo da requisicao sao realmente campos validos
//retorna um objeto com os campos que sao validos.
async function filtrarCampos(body) {
  let camposFiltrados = {};
  camposValidos.forEach((campo) => {
    const valor = body[campo];
    camposFiltrados = { ...camposFiltrados, [campo]: valor };
  });
  return camposFiltrados;
}

module.exports = {
  //Cria um responsavel, previamente verificando os dados passados.
  async create(req, res) {
    try {
      const camposFiltrados = await filtrarCampos(req.body);

      if (Object.keys(camposFiltrados).length == 0) {
        throw new DadosInvalidosError("Não foram fornecidos dados validos");
      }
      const resultado = await models.Responsaveis.create(camposFiltrados);

      return res.status(201).json(resultado);
    } catch (error) {
      return res.status(400).json({
        mensagem: "Não foram fornecidos dados Válidos",
        errorId: error.errorId,
      });
    }
  },
  
  //Procura um responsavel via query params usando o id como parametro
  async findByPK(req, res) {
    try {
      const primaryKey = req.query.pk;
      const resultado = await models.Responsaveis.findOne({
        where: { id: primaryKey },
      });

      if (resultado === null) {
        throw new InvalidPrimaryKeyError(
          "Esse id não existe ainda na database!"
        );
      }

      return res.status(200).json(resultado);
    } catch (error) {
      res
        .status(400)
        .json({ mensagem: error.mensagem, idError: error.idError });
    }
  },
};
