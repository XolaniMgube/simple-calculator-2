"use strict";

class Calculator {
    constructor() {
        this.storage = [];
        this.memorySlot = [];
    }

    add() {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] == "LAST") {
                sum += this.last()
            } else if (typeof arguments[i] == "string" && arguments[i].includes("SLOT_")) {
                let slotPosition = arguments[i].match(/\d+/g)
                sum += this.getSlot(slotPosition)
            } else {
                sum += arguments[i];
            }
            
        }
        this.storage.push(sum);
        return sum;
    }

    multiply() {
        let product = 1;
        for (let j = 0; j < arguments.length; j++) {
            if (arguments[j] == "LAST") {
                product *= this.last()
            } else if (typeof arguments[j] == "string" && arguments[j].includes("SLOT_")) {
                let slotPosition = arguments[j].match(/\d+/g)
                product *= this.getSlot(slotPosition)
            } else {
                product *= arguments[j];
            }
        }
        this.storage.push(product);
        return product;
    }

    last() {
        return this.storage[this.storage.length - 1];
    }

    setSlot(slotNumber) {
        this.memorySlot.push(this.storage[slotNumber - 1])
    }

    getSlot(slotNumber) {
        return this.memorySlot[slotNumber - 1];
    }
}

let instance = new Calculator()
instance.add(1,2,3,4)
instance.setSlot(1)
console.log(instance.multiply(2, "SLOT_1"))

module.exports = Calculator;

