"use strict";

class Calculator {
    constructor() {
        this.storage = [];
        this.memorySlot = [];
    }

    add() {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        this.storage.push(sum);
        return sum;
    }

    multiply() {
        let product = 1;
        for (let j = 0; j < arguments.length; j++) {
            product *= arguments[j];
        }
        this.storage.push(product);
        return product;
    }

    last() {
        return this.storage[this.storage.length - 1];
    }

    setSlot(slotNumber) {
        this.memorySlot[slotNumber - 1] = this.last();
    }

    getSlot(slotNumber) {
        return this.memorySlot[slotNumber - 1];
    }
}

module.exports = Calculator;