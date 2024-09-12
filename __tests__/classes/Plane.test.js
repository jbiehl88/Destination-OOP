const Plane = require("../../classes/Plane")
const Person = require("../../classes/Person")

describe("Plane", () => {
	let plane = new Plane("Delta", "OBX")
	it("Plane Properties", () => {
		expect(plane).toBeInstanceOf(Plane)
		expect(plane.company).toBe("Delta")
		expect(plane.origin).toBe("DFW")
		expect(plane.destination).toBe("OBX")
	})

	it("Plane Methods", () => {
		let plane = new Plane("Delta", "OBX")
		let person = new Person("JohnB", "OBX")
		plane.addPassenger(person)
		expect(plane.getPassengers()).toEqual([person])
		expect(plane.passengers).toEqual([person])
	})
})
