class World {

	constructor(appPlayerContext) {
		this.context = appPlayerContext
	}

	onUpdate(fn) {
		this.context.on('updated', fn)
	}

	getPlayers() {
		return this.context.find();
	}

}

export default World
