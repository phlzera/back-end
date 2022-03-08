const DadosInvalidosError = require("../Errors/DadosInvalidosError");
const models = require("../models");
const camposValidos = ["nome", "sobrenome", "registro", "rg", "senha", "nivel"];
const DuplicateDataError = require("../Errors/DuplicateDataError");
const bcrypt = require("bcrypt");

function gerarSenhaHash(senha) {
  const custo = 12;
  return bcrypt.hash(senha, custo);
}

async function verificaDuplicacoes(camposValidados) {
  if(Object.keys(camposValidados).length === 0) {
    throw new DadosInvalidosError('Não foram fornecidos dados válidos!')
  }

  if(await models.Funcionarios.findOne({where: {registro: camposValidados.registro}})) {
    throw new DuplicateDataError('O registro informado já está em uso!') 
  }

  if(await models.Funcionarios.findOne({where: {rg: camposValidados.rg}})) {
    throw new DuplicateDataError('O rg informado já está em uso!') 
  }
}

// verifica os dados passados no corpo da requisicao
// transforma senha em senhaHash
async function validarCampos(body) {
  let camposValidados = {};

  const novaSenha = await gerarSenhaHash(body.senha);

  camposValidos.forEach((campo) => {
    const valor = body[campo];
    camposValidados = { ...camposValidados, [campo]: valor };
    if ((campo = "senha")) {
      camposValidados = { ...camposValidados, senhaHash: novaSenha, senha: null}
    }
  });
  await verificaDuplicacoes(camposValidados);
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

      const camposValidados = await validarCampos(body);
      console.log(camposValidados);
      const funcionario = await models.Funcionarios.create(camposValidados);
      return res.status(201).json(funcionario);
    } catch (error) {
      return res.status(400).json({mensagem: error.mensagem, idError: error.idError});
    }
  },
};
