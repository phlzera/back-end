class DuplicateDataError extends Error {
    constructor(mensagem) {
        super(mensagem);
        this.mensagem = mensagem;
        this.idError = 2;
    }
}

module.exports = DuplicateDataError;