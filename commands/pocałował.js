const Discord = require("discord.js");
const superagent = require("superagent");
exports.run = async (client, message, args) => {
  var obraz = [""
  ]
    const { RichEmbed } = require('discord.js');
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser)   return   message.channel.send(new RichEmbed()
    .setColor("RANDOM")            
    .setDescription("Musisz oznaczyć osobę, którą chcesz przytulić!")
    .setFooter(`Wywołane przez ${message.author.tag}`)
    .setTimestamp())

    var temp = obraz[Math.floor(Math.random() * 32)]
    let hugEmbed = (new RichEmbed()
    .setDescription(`**${message.author.username}** pocałował: **${message.mentions.users.first().username}**!`)
    .setImage(temp)
    .setColor("RANDOM"))
    message.channel.send(hugEmbed)

}
module.exports.help = {
  name: "love",
  category: "4FUN",
description: `Całujesz wzmiankowaną osobę. Ta komenda jest wyłącznie rozrykowa.`,
aliases: [],
permLevel:"Użytkownik"
}
