"use strict"

class Calculator{
    constructor() {
        let storage = []
    }

    add() {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }

    multiply() {
        let product = 1;
        for (let j = 0; j < arguments.length; j++) {
            product *= arguments[j]
        }
        return product;
    }
}

let instance = new Calculator;
console.log(instance.add(1,2,3,4))