const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');
const io = require('socket.io-client');

const client = feathers();

// Set up Socket.io client with the socket
client.setup = (ip) => {
	const socket = io(ip);
	client.configure(socketio(socket));
}

export default client
