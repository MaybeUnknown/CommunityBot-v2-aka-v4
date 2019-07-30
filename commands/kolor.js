const Discord = require("discord.js");

exports.run = async(client, message, args) => {
    const { RichEmbed } = require('discord.js');
  let color = Math.floor(Math.random() * 16777214) + 1
  message.channel.send({
    embed: {
        color: color,  
        description: `Losowy kolor to: 0x${color.toString(16).toUpperCase()}`
    }
})};


exports.help = {
  name: "kolor",
  category: "4FUN",
  description: `Pokazuje losowy kolor.
  {prefix}kolor`,
  aliases: ["color"],
  permLevel:"Użytkownik"
}