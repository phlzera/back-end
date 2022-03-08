class InvalidPrimaryKeyError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.mensagem = mensagem;
    this.idError = 1;
  }
}

module.exports = InvalidPrimaryKeyError;
