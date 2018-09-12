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
		if(!this.playerID) { throw new Error('No Player ID set. Call `player.setPlayerID("asdasdasd")') }

		return this.world.get(this.playerID).catch(() => {
			console.log('No player found under: PlayerID = ' + this.playerID + '. Creating new player.');
			return this.world.create({
				_id: this.playerID,
				location: this.location
			}).then((response) => {
				this.playerID = response._id;
				this.location = response.location;
				this.getOrCreatePlayer()
			})
		})
	}

	moveUp() {
		this.location.y++;
		return this.sendToServer()
	}

	sendToServer() {
		return this.world.update(this.playerID, {
			location: this.location
		}).then((response) => {
			this.location = response.location
		})
	}

}

export default Player
