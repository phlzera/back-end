class DadosInvalidosError extends Error {
  constructor(message) {
    super(message);
    this.name = "DadosInvalidos";
    this.errorId = 0;
  }
}

module.exports = DadosInvalidosError;
