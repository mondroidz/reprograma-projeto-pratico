const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.get)
router.get("/concluidos", controller.getConcluidos)
router.get("/incluido", controller.getIncluirData)
router.get("/finalizar", controller.getFinal)
router.get("/buscar/:colaboradoras", controller.getColaborador)
router.get("/:id", controller.getById)


module.exports = router