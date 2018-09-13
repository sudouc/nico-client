class World {

	constructor(appPlayerContext) {
		this.context = appPlayerContext
	}

	onUpdate(fn) {
		this.context.on('updated', fn)
	}

	getPlayers(fn) {
		return this.context.find().then(fn);
	}

}

export default World
