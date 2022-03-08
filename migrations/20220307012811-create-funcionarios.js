"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Funcionarios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
      },
      sobrenome: {
        type: Sequelize.STRING,
      },
      rg: {
        type: Sequelize.STRING,
      },
      registro: {
        type: Sequelize.STRING,
      },
      senhaHash: {
        type: Sequelize.STRING,
      },
      nivel: {
        type: Sequelize.ENUM("Cuidador", "Tecnico em Enfermagem", "Enfermeiro"),
        allowNull: false,
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
    await queryInterface.dropTable("Funcionarios");
  },
};
