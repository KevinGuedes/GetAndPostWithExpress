function soma(a, b) {
    return a + b;
};


function multiplicacao(a, b) {
    return a * b;
}


const testIfPrime = (number) => {
    var count = 0;

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }

    if (count === 2) {
        return `${number} is Prime`;
    }
    else {
        return `${number} is not Prime`;
    }
}


const fibonacci = (elementNumber) => {
    var ithElement;
    if (elementNumber < 2) {
        ithElement = 0;
    }
    else {
        const fib = require('fibonacci');
        ithElement =  fib.iterate(elementNumber - 1).number;
    }
    return `The element #${elementNumber} from Fibonacci sequence is: ` + ithElement;
}


const process = (firstNumber, secondNumber) => {
    if (!(firstNumber === 0 && secondNumber === 0)) {
        if (!secondNumber) {
            return firstNumber;
        }
        return process(secondNumber, firstNumber % secondNumber);
    }
}


const gcd = (firstNumber, secondNumber) => {

    if (firstNumber < 0) {
        firstNumber = -firstNumber;
    }
    if (secondNumber < 0) {
        secondNumber = -secondNumber;
    }

    if (firstNumber === 0 && secondNumber === 0) {
        return "Invalid numbers. They cannot be both 0";
    }
    else if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
        return "Insert both numbers";
    }
    else {
        return "The greatest common divisor of " + firstNumber + " and " + secondNumber + " is: " + process(firstNumber, secondNumber);
    }
}

const pi = 3.14;

module.exports = {
    soma,
    testIfPrime,
    fibonacci,
    multiplicacao,
    gcd,
    pi
}

module.exports.teste = function(b){
    return b+1;
}