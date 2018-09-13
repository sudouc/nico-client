import World from "./World";

class Player {

	constructor(world) {
		this.playerID = '';
		this.location = {
			x: 100,
			y: 100
		}
	}

	addToWorld(world) {
		this.world = world.context;
	}

	hasPlayerID() {
		return !!this.playerID
	}

	setPlayerID(playerID) {
		this.playerID = playerID
	}

	getPlayerFromWorld() {
		return this.world.get(this.playerID)
	}

	existsInWorld() {
		return this.getPlayerFromWorld()
			.then(response => Promise.resolve(true))
			.catch(error => Promise.resolve(false))
	}

	createInWorld() {
		return this.world.create({
			_id: this.playerID,
			location: this.location
		}).then((response) => {
			this.playerID = response._id;
			this.location = response.location;
			this.getOrCreatePlayer()
		})
	}

	getOrCreatePlayer() {
		return this.world.get(this.playerID).catch(this.createInWorld)
	}

	moveUp() {
		this.location.y++;
		return this.sync()
	}

	sync() {
		return this.world.update(this.playerID, {
			location: this.location
		}).then((response) => {
			this.location = response.location
		})
	}

}

export default Player
