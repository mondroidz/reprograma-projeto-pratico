const express = require("express")
const app = express()

//rotas pastas
const index = require("./routes/index")
const tarefas = require("./routes/tarefasRoute")


app.use("/", index)
app.use("/tarefas", tarefas)


module.exports = app