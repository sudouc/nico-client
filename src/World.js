class World {
	constructor(appPlayerContext) {
		this.context = appPlayerContext
		this.context.on('updated', (message) => console.log(message))
	}

	getPlayers() {
		return this.context.find();
	}

}

export default World
