

exports.run = (client, message, args, tools) => {
	const string = message.translate;
	var sayings = [string.yes,
											string.finally,
											string.course,
											string.no,
											string.thought,
											string.reply,
											string.later,
											string.course1,
											string.yes];
	const { RichEmbed } = require('discord.js');
		message.channel.send(new RichEmbed()
												.setColor("RANDOM")
												.setDescription(string.question)
												.setAuthor(message.author.tag)      
												.addField(sayings[Math.floor((Math.random() * sayings.length) + 0)],`🎱`));
	}
	module.exports.help = {
		name: "8ball",
		category: '4FUN',
		description: `
		Zadaj pytanie a bot odpowie ci na nie.
	{prefix}8ball <pytanie>
		`,
		aliases: [],
		permLevel:"Użytkownik"
	} 
	