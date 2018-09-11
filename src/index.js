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

// Set up Socket.io client with the socket
app.configure(socketio(socket));

// Receive real-time events through Socket.io
app.service('players')
	.on('created', (message) => console.log(message))
	.on('updated', (message) => console.log(message));
