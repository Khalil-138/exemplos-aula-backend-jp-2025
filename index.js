import express from "express"

const app = express ();

app.get('/exercicio1/:num1/:num2', (req, res) => {
//  http://localhost:3000/exercicio1/
    const num1 = req.query.num1
    const num2 = req.query.num2
    console.log(req.params)
    res.status(200).send("Resultado " + num1+num2)
})


//app.get('/api/pessoa/:id/teste:outroId', (req, res) => {
    // Query params
    //inicializa na URL depois do '?'
    // localhost:3000/api/pessoa/3?nome=joao&idade=10&cidade=Joinviller&status=dead
    // ?idade=10

  //  const nome = req.query.nome
   // console.log(req.params)
   // res.status(200).send("Hello " + nome)
//})

//app.get('/exercicio1', (req, res) => {
   
   // const num1 = req.query.num1
  //  const num2 = req.query.num2     
   // console.log(req.params)

   // res.status(200).send("Hello " + nome)
//})


app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000")
})