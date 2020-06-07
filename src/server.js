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
    const rate = req.body.interestRate/100
    const inV = req.body.inicialValue
    const mV = req.body.monthlyValue
    const y = req.body.years * 12
    const VAcum = (mV*y)    
    const valor = fv(rate, inV, mV, y)
    const interest = (valor-VAcum)
    return res.render("result.html", {valor, VAcum, interest})
})

function fv(taxa, valorAtual, mensalidade, periodo){
    return (((((Math.pow((1+taxa), periodo)) - 1) * mensalidade)/taxa) + ((Math.pow((1+taxa),periodo))*valorAtual))
}


server.listen(3200)