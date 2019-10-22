const express = require("express")
const app = express()

//rotas pastas
const index = require("./routes/index")

app.use(`/`, index)

module.exports = app