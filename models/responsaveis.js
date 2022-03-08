"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Responsaveis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Responsaveis.init(
    {
      documento: DataTypes.STRING,
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      telefone: DataTypes.STRING,
      rua: DataTypes.STRING,
      bairro: DataTypes.STRING,
      numero: DataTypes.INTEGER,
      cidade: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Responsaveis",
    }
  );
  return Responsaveis;
};
