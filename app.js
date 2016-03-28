// Get our tmi module
var tmi = require('tmi.js');

// Get our options for the Irc connection
var options = require('./options.js');

// Get our chat-command module
// This is where you define all your !commands
var chat = require('./chat-commands.js');

//Connect to client;
var client = new tmi.client(options);
client.connect();

// Handle the chat event
client.on("chat", function(channel, user, message, self){
	var clientInfo = [ client, message ];
	var list = [
		"!newVideo",
		"!commands",
		"!appSeries",
		"!youtube",
		"!twitter",
		"!github"
	];
	chat.command("!newVideo", "https://youtu.be/1q8DRltaHkQ", clientInfo);
	chat.command("!commands", chat.commandList(list), clientInfo);
	chat.command("!appSeries", "https://www.youtube.com/playlist?list=PL9U4VLnCxZoOo2V6PXJ4cB2T61EZb0bYj", clientInfo);
	chat.command("!youtube", "https://www.youtube.com/c/DevCoffee", clientInfo);
	chat.command("!twitter", "https://twitter.com/dev_coffee", clientInfo);
	chat.command("!github", "https://www.youtube.com/c/DevCoffee", clientInfo);
});

client.on("connected", function() {
	client.action("devcoffee_", "Hello everyone. I'm DevCoffeeBot. What size latte do you want?");
});