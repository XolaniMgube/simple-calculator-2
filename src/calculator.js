"use strict";

class Calculator {
    constructor() {
        this.storage = [];
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
        this.storage.push(product)
        return product;
    }

   last() {
       return this.storage[this.storage.length - 1]
   }

   setSlot(slotNumber) {
        return this.storage[slotNumber - 1]
        
   }

   getSlot(slotNumber) {
        return this.setSlot(slotNumber)
   }
   
}

// let instance = new Calculator();
// console.log(instance.add(1, 2));
// console.log(instance.add(1, 3));
// console.log(instance.add(1, 4));
// console.log(instance.add(1, 5));
// console.log(instance.add(1, 6));

// console.log(instance.setSlot(1), " should be 3")
// console.log(instance.getSlot(3), " should be 5")

// console.log(instance.getSlot(4))

// console.log(instance.multiply(instance.last(), 5))
// console.log(instance.getSlot(1))

module.exports = Calculator
