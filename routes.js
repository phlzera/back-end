const express = require("express");
const { route } = require("express/lib/application");
const FormulariosController = require("./Controllers/FormulariosController");
const FuncionariosController = require("./Controllers/FuncionariosController");
const PacientesController = require("./Controllers/PacientesController");
const ResponsaveisController = require("./Controllers/ResponsaveisController");
const router = express.Router();

//Pacientes
router.get("/pacientes", PacientesController.getAll);
router.post("/pacientes", PacientesController.create);
//Responsaveis
router.post("/responsaveis", ResponsaveisController.create);
router.get("/responsaveis", ResponsaveisController.findByPK);
//Funcionarios
router.post("/funcionarios", FuncionariosController.create);
router.get("/funcionarios", FuncionariosController.getAll);
//Formularios
router.get("/formularios", FormulariosController.getAll);
module.exports = router;
