class Bag {
	#owner
	constructor(weight, id) {
		this.weight = weight
		this.id = id
		this.#owner = null
	}

	getOwner() {
		return this.#owner
	}

	setOwner(owner) {
		this.#owner = owner
	}
}

module.exports = Bag
