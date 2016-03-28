// Get our tmi module
var tmi = require('tmi.js');

// Readline tool to prompt user for channel name
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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
	},
	channels: ["devcoffee_"]
}


//Connect to client;
var client = new tmi.client(options);
client.connect();
client.on("chat", function(channel, user, message, self){
	client.color("Red").then(function(data) {
		client.action("devcoffee_", "Suh dude");
	}).catch(function(err) {
	   
	});
	client.color("GoldenRod").then(function(data) {
		client.action("devcoffee_", "Suh dude");
	}).catch(function(err) {
	   
	});
	client.color("HotPink").then(function(data) {
		client.action("devcoffee_", "Suh dude");
	}).catch(function(err) {
	   
	});
});

// Uncomment later
// var channelName = rl.question("What channel do you want me in?", function(answer) {
// 	rl.close();
// 	options.channels.push("#" + answer);
// });
