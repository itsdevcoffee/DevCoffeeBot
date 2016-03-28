// Define all your commands for the bot here.
module.exports = {
	command: function(command, response, options) {
		console.log(typeof options === 'object');
		if(typeof options === 'object') {
			if(command === options[1] || command.toLowerCase() === options[1]) {
				options[0].action("devcoffee_", response);
			}
		} else {
			throw new Error("Must pass clientInfo with array of client, message");
		}
	},
	commandList: function(list) {
		console.log(list);
		 var strList = "Here are the commands:";
		 for (var i = 0; i < list.length; i++) {
		 	strList += (" " +list[i].command + ", ");
		 };
		 return strList;
	}

}