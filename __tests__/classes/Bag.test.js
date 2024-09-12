const Bag = require("../../classes/Bag")
const Person = require("../../classes/Person")

describe("Bag", () => {
	it("instance of Bag", () => {
		let bag = new Bag(5, 888)
		expect(bag).toBeInstanceOf(Bag)
		expect(bag.weight).toBe(5)
		expect(bag.id).toBe(888)
		expect(bag.getOwner()).toBe(null)
	})

	it("test getOwner()", () => {
		let bag = new Bag(5, 888)
		let person = new Person("JohnB", "OBX")
		bag.setOwner(person)
		expect(bag.getOwner()).toEqual(person)
	})
})
