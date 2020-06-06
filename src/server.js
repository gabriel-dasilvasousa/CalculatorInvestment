const express = require("express")

const server = express()

server.use(express.urlencoded({ extended: true }))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.use(express.static("public"))



server.get("/", (req,res) => {
    return res.render("index.html")
})

server.post("/result.html", (req,res) => {
    rate = req.body.interestRate/100
    inV = req.body.inicialValue
    mV = req.body.monthlyValue
    y = req.body.years * 12
    const valor = fv(rate, inV, mV, y)
    console.log(valor)
    return res.render("result.html", {valor})
})

function fv(taxa, valorAtual, mensalidade, periodo){
    return (((((Math.pow((1+taxa), periodo)) - 1) * mensalidade)/taxa) + ((Math.pow((1+taxa),periodo))*valorAtual))
}


server.listen(3200)