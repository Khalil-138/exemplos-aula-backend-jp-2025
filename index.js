import express from "express"
import { exercicio1, exercicio2 } from "./services/exercicios.js";

const app = express();
  //  http://localhost:3000/exercicio1/1/1
app.get('/exercicio1', exercicio1)


//app.get('/api/pessoa/:id/teste:outroId', (req, res) => {
// Query params
//inicializa na URL depois do '?'
// localhost:3000/api/pessoa/3?nome=joao&idade=10&cidade=Joinviller&status=dead
// ?idade=10

//  const nome = req.query.nome
// console.log(req.params)
// res.status(200).send("Hello " + nome)
//})
//  http://localhost:3000/exercicio2/10/100
app.get('/exercicio2/:valorhora/:horaspormes', exercicio2)



app.get('/exercicio3/:peso1/:peso2/:peso3/:peso4/:peso5', (req, res) => {

    const peso1 = Number(req.params.peso1)
    const peso2 = Number(req.params.peso2)
    const peso3 = Number(req.params.peso3)
    const peso4 = Number(req.params.peso4)
    const peso5 = Number(req.params.peso5)
    console.log(req.params)
    const pesototal = peso1 + peso2 + peso3 + peso4 + peso5
    const mediapeso = pesototal / 5
    res.status(200).send("A média dos 5 pesos é : " + mediapeso)
})

app.get('/exercicio4/:celsius/', (req, res) => {

    const celsius = Number(req.params.celsius)
    const fahrenheit =  (9*celsius+160 ) /5
    console.log(req.params)
    res.status(200).send("A temperatura informada em Celsius convertida para Fahrenheit é de : " + fahrenheit )
})


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})