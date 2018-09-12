/**
 * Nico Game
 * Library by alex@sudo.org.au
 *
 * For information about this game, visit
 */

import client from './client';
import World from './Objects/World'
import Player from './Objects/Player'


const world = new World(client.service('players'));
world.getPlayers().then((players) => {
	console.log('––––––––––––––––––');
	console.log('Current Players:');
	console.log(players);
	console.log('––––––––––––––––––')
});
world.onUpdate((messages) => {
	console.log(messages)
});

const player = new Player(world);
const playerID = '123';
player.setPlayerID(playerID);

player.getOrCreatePlayer();
player.moveUp().then(() => {
	player.moveUp()
});
