const Airport = require("../../classes/Airport")
const Plane = require("../../classes/Plane")

describe("Airport", () => {
	let plane = new Plane("Delta", "OBX")
	let airport = new Airport("DFW International")

	it("Airport Properties", () => {
		expect(airport).toBeInstanceOf(Airport)
		expect(airport.name).toBe("DFW International")
		expect(Airport.airportCode).toBe("DFW")
		expect(airport.planes).toEqual([])
	})

	it("Airport Methods", () => {
		airport.addPlane(plane)
		expect(airport.planes).toEqual([plane])
		expect(airport.getPlanes()).toEqual([plane])
	})
})
