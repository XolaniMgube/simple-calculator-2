"use strict"

function unrandomizeTesting() {
    beforeEach(function () {
        global.Calculator = require("../src/calculator.js")
        global.calculatorInstance = new Calculator()
    });
}

describe("Testing the Calculator class for the add function", function () {

    unrandomizeTesting()

    it("returns the sum of add function", function () {
        expect(calculatorInstance.add(1, 2)).toBe(3)
        expect(calculatorInstance.add(1, 2, 3, 4)).toBe(10)
    })
})


describe("Testing the Calculator class for the multiply function", function () {

    unrandomizeTesting()

    it("returns the product of the multiply function", function () {
        expect(calculatorInstance.multiply(1, 2)).toBe(2)
        expect(calculatorInstance.multiply(1, 2, 3, 4)).toBe(24)
    })
})

describe("Testing for the storage of the last function", function () {

    unrandomizeTesting()

    it("gets the last element in the storage array", function () {
        calculatorInstance.add(1, 2);
        calculatorInstance.multiply(1, 2)
        expect(calculatorInstance.last()).toBe(2)
    })
})

describe("Testing for passing arguments as strings", function () {

    unrandomizeTesting()

    it("allows the last function to be passed as a string argument", function () {
        calculatorInstance.add(1, 2)
        calculatorInstance.multiply(1, 2);
        expect(calculatorInstance.multiply("LAST", 5)).toBe(10)
    })
})

describe("Testing for storage of indexes", function () {

    unrandomizeTesting()

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

        expect(calculatorInstance.add("LAST", 10)).toBe(310)
        expect(calculatorInstance.add("SLOT_1", 5)).toBe(8)
        expect(calculatorInstance.multiply("SLOT_2", 2)).toBe(60)
    })
})