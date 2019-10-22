const express = require("express")
const router = express.Router()  //definição do caminho/rota

router.get("/", function (req, res){
    res.status(200).send({
        title: "Meu Projeto Prático", 
        version: "0.0.1"
    })
})



module.exports = router