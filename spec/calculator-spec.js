"use strict"

function idk() {
    
}

describe("Testing the Calculator class", function () {

    beforeEach(function () {
        global.Calculator = require("../src/calculator.js")
        global.calculatorInstance = new Calculator()
    });

    it("returns the sum of add function", function () {
        expect(calculatorInstance.add(1, 2)).toBe(3)
        expect(calculatorInstance.add(1, 2, 3, 4)).toBe(10)
    })

    it("returns the product of the multiply function", function () {
        expect(calculatorInstance.multiply(1, 2)).toBe(2)
        expect(calculatorInstance.multiply(1, 2, 3, 4)).toBe(24)
    })

    it("gets the last element in the storage array", function () {
        calculatorInstance.add(1, 2);
        calculatorInstance.multiply(1, 2)
        expect(calculatorInstance.last()).toBe(2)
    })

    it("allows the last function to be passed as a string argument", function () {
        calculatorInstance.add(1, 2)
        calculatorInstance.multiply(1, 2);
        expect(calculatorInstance.multiply("LAST", 5)).toBe(10)
    })

    it("returns an element on a specific index determined by the setSlot argument", function () {
        calculatorInstance.add(1, 2)
        calculatorInstance.setSlot(1)
        expect(calculatorInstance.getSlot(1)).toBe(3)

        calculatorInstance.add(10, 20)
        calculatorInstance.setSlot(2)
        expect(calculatorInstance.getSlot(2)).toBe(30)

        calculatorInstance.add(100, 200)
        expect(calculatorInstance.getSlot(1)).toBe(3)
        expect(calculatorInstance.getSlot(2)).toBe(30)
        expect(calculatorInstance.last()).toBe(300)

        expect(calculatorInstance.add(calculatorInstance.last(), 10)).toBe(310)
        expect(calculatorInstance.add(calculatorInstance.getSlot(1), 5)).toBe(8)
        expect(calculatorInstance.multiply("SLOT_2", 2)).toBe(60)
    })
})