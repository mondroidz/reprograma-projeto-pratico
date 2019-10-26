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

exports.getColaborador = (req, res) => {
        const colaborador = req.params.colaboradoras.toLowerCase()
        console.log(colaborador)
        const resultados = tarefas.filter(tarefa => tarefa.nomeColaborador.toLowerCase() == colaborador)
        if(resultados.length == 0) {
            res.status(404).send("Esse nome não existe em nossos registros")
        } else {
            res.status(200).send(resultados)
    }    
}  

exports.getIncluirData = (req, res) => {
    const incluirTarefa = tarefas.map(tarefas => tarefas.dataInclusao) 
    const finalizarTarefa = tarefas.map(tarefas => tarefas.dataConclusao)        
        //console.log(incluirTarefa, finalizarTarefa)
    
    tarefas.sort(function(a, b) {
        return new Date(a.dataInclusao) - new Date(b.dataInclusao)
    })
    console.log(tarefas)
}    

exports.getFinal = (req, res) => {
    const incluirTarefa = tarefas.map(tarefas => tarefas.dataInclusao) 
    const finalizarTarefa = tarefas.map(tarefas => tarefas.dataConclusao)  
    
}





        //incluirTarefa.sort() 
        



       // function trazerDataInc(item) {}
        //     const dataDifIncluir = tarefas.dataInclusao
        // console.log(dataDifIncluir)

        // const splitData = incluirTarefa.split("/")
        // const diaInclus = splitData[0]
        // const mesInclus = splitData[1]
        // const anoInclus = splitData[2]
        //     const listarInclusao = incluirTarefaCresc(ano, mes, dia)

        //res.status(200).send({ listarInclusao })

            //const incluirTarefaCresc = listarInclusao(anoInclus, mesInclus, diaInclus)
        

