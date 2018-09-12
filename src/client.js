const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');
const io = require('socket.io-client');

const socket = io('http://ari.local:3030');
const client = feathers();

// Set up Socket.io client with the socket
client.configure(socketio(socket));

export default client
