const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

//const {soma, testIfPrime, fibonacci, multiplicacao} = require('./mathFunctions');
const calc = require('./mathFunctions'); // ./ para dizer que é 'irmão' do app.js, mesmo nível de pastas
// ../ para voltar
//app.use(bodyParser.json());

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//GET
app.get('/', function (req, res) {
    // res.send('Oi, mundo :-)');
    res.render('index', {
        title: "Teste"
    })
});


//POST
app.post('/soma', function (req, res) {
    var firstNumber = parseFloat(req.body.firstNumber);
    var secondNumber = parseFloat(req.body.secondNumber);
    res.send(`${firstNumber} + ${secondNumber} = ${calc.soma(firstNumber, secondNumber)}`);
    console.log(req.body);
});

app.post('/testIfPrime', function (req, res) {
    res.send(`${calc.testIfPrime(parseInt(req.body.inputNumber))}`);
    console.log(req.body);
});



app.post('/fibonacci', function (req, res) {
    res.send(`${calc.fibonacci(parseInt(req.body.inputNumber))}`);
    console.log(req.body);
});

app.post('/gcd', function (req, res) {
    //"/gcd" é a action do html forms 
    var firstNumber = parseInt(req.body.firstNumber);
    var secondNumber = parseInt(req.body.secondNumber);
    res.send(`${calc.gcd(firstNumber, secondNumber)}`);
    console.log(req.body);
});

app.post('/multiplicacao', function (req, res) {
    var firstNumber = parseFloat(req.body.firstNumber);
    var secondNumber = parseFloat(req.body.secondNumber);
    res.send(`${firstNumber} x ${secondNumber} = ${calc.multiplicacao(firstNumber, secondNumber)}`);
    console.log(req.body);
});


var port = 3001;
app.listen(port, function () {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

