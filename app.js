var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//const {soma, testIfPrime, fibonacci, multiplicacao} = require('./mathFunctions');
const calc = require('./mathFunctions');

app.use(bodyParser.json());


//GET
app.get('/', function (req, res) {
    res.send('Oi, mundo :-)');
});


//POST
app.post('/soma', function (req, res) {
    var body = req.body;
    var resultado = calc.soma(body.a, body.b);
    res.send(`${body.a} + ${body.b} = ${resultado}`);
    console.log(body);
});

app.post('/testIfPrime', function (req, res) {
    res.send(`${calc.testIfPrime(req.body.inputNumber)}`);
    console.log(req.body);
});

app.post('/fibonacci', function (req, res) {
    res.send(`${calc.fibonacci(req.body.inputNumber)}`);
    console.log(req.body);
});

app.post('/gcd', function (req, res) {
    res.send(`${calc.gcd(body.firstNumber, req.body.secondNumber)}`);
    console.log(req.body);
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

