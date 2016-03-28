// Define all your commands for the bot here.
module.exports = {
	command: function(command, response, options) {
		if(command === options[1] || command.toLowerCase() === options[1]) {
			options[0].action("devcoffee_", response);
		}
	},
	commandList: function(list) {
		var strList = "Here are the commands:";
		for (var i = 0; i < list.length; i++) {
			strList += ("	" + list[i]);
		};
		return strList;
	}

}