const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    const { RichEmbed } = require('discord.js');
    let zUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!zUser)   return   message.channel.send(new RichEmbed()
    .setColor("RANDOM")            
    .setDescription("Oznacz osobę!")
    .setFooter(`Wywołane przez ${message.author.tag}`)
    .setTimestamp())

    let zabij = (new RichEmbed()
    .setDescription(`**${message.author.username}** zabił **${message.mentions.users.first().username}**!`)
    .setColor("RANDOM")
    .setTimestamp())
    message.channel.send(zabij)

}
module.exports.help = {
  name: "zabij",
  category: "4FUN"
}
