"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Formularios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Formularios.init(
    {
      autor: DataTypes.INTEGER,
      paciente: DataTypes.INTEGER,
      sistolica: DataTypes.INTEGER,
      diastolica: DataTypes.INTEGER,
      pulso: DataTypes.INTEGER,
      saturacao: DataTypes.FLOAT,
      temperatura: DataTypes.FLOAT,
      anotacao: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Formularios",
    }
  );
  return Formularios;
};
