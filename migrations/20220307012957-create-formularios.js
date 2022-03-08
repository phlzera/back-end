"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Formularios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      autor: {
        type: Sequelize.INTEGER,
      },
      paciente: {
        type: Sequelize.INTEGER,
      },
      sistolica: {
        type: Sequelize.INTEGER,
      },
      diastolica: {
        type: Sequelize.INTEGER,
      },
      pulso: {
        type: Sequelize.INTEGER,
      },
      saturacao: {
        type: Sequelize.FLOAT,
      },
      temperatura: {
        type: Sequelize.FLOAT,
      },
      anotacao: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Formularios");
  },
};
