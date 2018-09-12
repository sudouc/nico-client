/**
 * Nico Game
 * Library by alex@sudo.org.au
 *
 * For information about this game, visit
 */
const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');
const io = require('socket.io-client');

const socket = io('http://ari.local:3030');
const app = feathers();

import World from './World'
import Player from './Player'

// Set up Socket.io client with the socket
app.configure(socketio(socket));

//
const world = new World(app.service('players'))
world.getPlayers().then((players) => {

});

const player = new Player(world);
const playerID = 'HureGQXyl5eHCyFH';
player.setPlayerID(playerID)

player.getOrCreatePlayer()


world.context.on('updated', (response) => {
	console.log(response)
})






for(let i = 0; i < 20; i++) {
	setTimeout(() => { player.moveUp() }, 20 * i)
}
