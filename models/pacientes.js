"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pacientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pacientes.init(
    {
      documento: DataTypes.STRING,
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      dataNascimento: DataTypes.STRING,
      responsavel: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Pacientes",
    }
  );
  return Pacientes;
};
