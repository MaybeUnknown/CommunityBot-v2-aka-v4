const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    const { RichEmbed } = require('discord.js');
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser)   return   message.channel.send(new RichEmbed()
    .setColor("RANDOM")            
    .setDescription("Musisz oznaczyć osobę, którą chcesz przytulić!")
    .setFooter(`Wywołane przez ${message.author.tag}`)
    .setTimestamp())

    let hugEmbed = (new RichEmbed()
    .setDescription(`**${message.author.username}** przytulił **${message.mentions.users.first().username}**!`)
    .setColor("RANDOM")
    .setFooter("Przytulanie")
    .setTimestamp())
    message.channel.send(hugEmbed)

}
module.exports.help = {
  name: "przytul",
  category: "4FUN",
  description: `Przytulasz wzmiankowaną osobę. 
  {prefix}przytul <wzmianka >`,
  aliases: [],
  permLevel:"Użytkownik"
}
