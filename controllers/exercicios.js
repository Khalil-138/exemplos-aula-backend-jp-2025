export const exercicio1 = (req, res) => {
    //  http://localhost:3000/exercicio1/1/1
    const num1 = Number(req.params.num1)
    const num2 = Number(req.params.num2)
    console.log(req.params)
    const Resultado = num1 + num2
    res.status(200).send("Resultado Enviado " + Resultado)
}
export const exercicio1Post = (req, res) => {
    //  http://localhost:3000/exercicio1/1/1
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)
    console.log(req.params)
    const Resultado = num1 + num2
    res.status(200).send({
        msg: "O resultado é" + Resultado,
    data: Resultado,
    error: null
})
}

export const exercicio2 = (req, res) => {

    const valorHora = Number(req.params.valorhora)
    const horasPorMes = Number(req.params.horaspormes)
    console.log(req.params)
    const salariomensal = valorHora * horasPorMes
    res.status(200).send("Seu salario mensal é : " + salariomensal)
}