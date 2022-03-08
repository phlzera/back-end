"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Funcionarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Funcionarios.init(
    {
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      rg: DataTypes.STRING,
      registro: DataTypes.STRING,
      senhaHash: DataTypes.STRING,
      nivel: DataTypes.ENUM("Cuidador", "Tecnico em Enfermagem", "Enfermeiro"),
    },
    {
      sequelize,
      modelName: "Funcionarios",
    }
  );
  return Funcionarios;
};
