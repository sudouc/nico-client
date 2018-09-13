/**
 * Nico Game
 * Library by alex@sudo.org.au
 *
 * For information about this game, visit
 */

import { client, World, Player } from './index';

import repl from "repl";

const world = new World(client.service('players'));
world.getPlayers((players) => {
	// console.log('––––––––––––––––––');
	// console.log('Current Players:');
	// console.log(players);
	// console.log('––––––––––––––––––')
});

world.onUpdate((messages) => {
	//console.log(messages)
});

// Create a new player object
const player = new Player();
// Give the playe object a world to interface with (creates event binding)
player.addToWorld(world)

// Set our player ID
const playerID = '124';
player.setPlayerID(playerID);

player.existsInWorld()
	.then(exists => {
		exists ? '' : player.createInWorld()
	})

player.moveUp()

const msg = 'message';
repl.start('> ').context.m = msg;

process.player = player
