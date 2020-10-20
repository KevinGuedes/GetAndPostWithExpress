var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const {soma, testIfPrime, fibonacci, multiplicacao} = require('./mathFunctions');


app.use(bodyParser.json());


//GET
app.get('/', function (req, res) {
    res.send('Oi, mundo :-)');
});


//POST
app.post('/soma', function (req, res) {
    var body = req.body;
    var resultado = soma(body.a, body.b);
    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
    console.log(body);
});

app.post('/testIfPrime', function (req, res) {
    var body = req.body;
    var resultado = testIfPrime(body.n);
    res.send(`O número ${body.n} é Primo? ${resultado}`);
    console.log(body);
});

app.post('/fibonacci', function (req, res) {
    var body = req.body;
    var resultado = fibonacci(body.n);
    res.send(`O elemento #${body.n} da sequência de Fibonacci é ${resultado}`);
    console.log(body);
});

app.post('/multiplicacao', function (req, res) {
    var body = req.body;
    var resultado = multiplicacao(body.a, body.b);
    res.send(`${body.a} x ${body.b} = ${resultado}`);
    console.log(body);
});

//Servidor
var port = 3001;
app.listen(port, function () {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

