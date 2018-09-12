import World from "./World";

class Player {
	constructor(world) {
		this.world = world.context;
		this.playerID = '';
		this.location = {
			x: 100,
			y: 100
		}
	}

	setPlayerID(playerID) {
		this.playerID = playerID
	}

	getOrCreatePlayer() {
		if(!this.playerID) { return console.error('No Player ID set. Call `player.setPlayerID("asdasdasd")') }

		this.world.get(this.playerID).then((response) => {
			return console.log('Found Existing Player: ' + response._id)
		}).catch(() => {
			console.log('No player found under' + this.playerID + '. Creating new player.')
			this.world.create({
				_id: this.playerID,
				location: this.location
			}).then(this.getOrCreatePlayer)
		})
	}

	moveUp() {
		this.location.y++
		this.sendToServer()
	}

	sendToServer() {
		this.world.update(this.playerID, {
			location: this.location
		})
	}

}

export default Player
