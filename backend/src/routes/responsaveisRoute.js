const express = require("express");
const router = express.Router();
const responsaveisController = require("../controllers/responsaveisController");

router.get("/responsaveis", responsaveisController.listarResponsaveis);
router.get("/responsaveis/:id", responsaveisController.perquisarResponsavel);

module.exports = router;