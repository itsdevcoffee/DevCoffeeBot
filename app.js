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
	var commandList = [
		{ command: "!newVideo", response:  "https://youtu.be/1q8DRltaHkQ" },
		{ command: "!appSeries", response:  "https://www.youtube.com/playlist?list=PL9U4VLnCxZoOo2V6PXJ4cB2T61EZb0bYj" },
		{ command: "!youtube", response:  "https://www.youtube.com/c/DevCoffee" },
		{ command: "!twitter", response:  "https://twitter.com/dev_coffee" },
		{ command: "!github", response:  "https://github.com/DmsChrisPena/DevCoffeeBot" }
	];
	
	chat.command("!commands", chat.commandList(commandList), clientInfo);
	
	for (var i = 0; i < commandList.length; i++) {
		var item = commandList[i];
		chat.command(item.command, item.response, clientInfo);
	};
});

client.on("connected", function() {
	client.action("devcoffee_", "Hello everyone. I'm DevCoffeeBot. What size latte do you want?");
});