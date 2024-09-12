const Person = require("../../classes/Person")
const Bag = require("../../classes/Bag")

describe("Person", () => {
	it("Person properties", () => {
		let person = new Person("JohnB", "OBX")
		expect(person).toBeInstanceOf(Person)
		expect(person.name).toBe("JohnB")
		expect(person.destination).toBe("OBX")
		expect(person.getBags()).toEqual([])
	})

	it("Person Methods", () => {
		let person = new Person("JohnB", "OBX")
		let bag = new Bag(8, 555)
		person.addBag(bag)
		expect(person.bags).toEqual([bag])
		expect(person.getBags()).toEqual([bag])
	})
})
