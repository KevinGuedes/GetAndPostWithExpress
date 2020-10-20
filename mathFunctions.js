function soma(a, b) {
    return a + b;
};


function testIfPrime(n) {
    var count = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            count++;
        }
    }

    if (quantity == 2) {
        return "Sim";
    }
    else {
        return "Não";
    }
}

function fibonacci(n) {
    var n = n - 1;
    const fib = require('fibonacci');
    //Ajuste para começar do 0 
    if (n <= 0) {
        return 0
    }
    else {
        return fib.iterate(n).number;
    }

}


module.exports = {
    soma,
    testIfPrime,
    fibonacci
}