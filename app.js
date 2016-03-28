// Get our tmi module
var tmi = require('tmi.js');

// Get API Key from module
// Goto api.twitch.tv to get yours
var apiKey = require('./key.js');

// Define the connection options
var options = {
	options: {
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "DevCoffeeBot",
		password: apiKey
	}
}