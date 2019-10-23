const tarefas = require("../model/tarefas.json")

exports.get = (req, res) => {
    console.log(req. url)
    res.status(200).send(tarefas)
}

// Outro Modelo de getById
// exports.getById = (req, res) => {
//     const id = req.params.id
//     res.status(200).send(tarefas.filter(item => item.id == id))
// }

exports.getById = (req, res) => {
    const id = req.params.id
    const tarefasId = tarefas.filter(item => item.id == id)
    res.status(200).send(tarefasId)
}

exports.getConcluidos = (req,res) => {
    const concluidas = tarefas.filter(item => item.concluido == "true")
        console.log(concluidas) 
        const concluidasNome = concluidas.map(item => item)
    res.status(200).send(concluidasNome)   
}