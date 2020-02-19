let Calculator = require("../src/calculator.js")

var instance = new Calculator()


// instance.add(1, 2)
// instance.multiply(1, 2, 3, 4)
// instance.setSlot(1)
// instance.getSlot(1)

describe("Testing the Calculator class", function() {
    it("returns the sum of add function", function() {
        expect(instance.add(1, 2, 3, 4)).toBe(10)
    })

    it("returns the product of the multiply function", function() {
        expect(instance.multiply(1, 2, 3, 4)).toBe(24)
    })

    it("gets the last element in the storage array", function() { 
        expect(instance.last()).toBe(24)
    })

    it("allows the last function to be passed as an argument", function() {
        expect(instance.multiply(instance.last(), 2)).toBe(48)
    })

    it("returns an element on a specific index determined by the setSlot argument", function() {
        expect(instance.getSlot(1)).toBe(3)
    })
})