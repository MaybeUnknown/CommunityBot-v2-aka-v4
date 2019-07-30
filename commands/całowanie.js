const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    const { RichEmbed } = require('discord.js');
    let cUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!cUser)   return   message.channel.send(new RichEmbed()
    .setColor("RANDOM")            
    .setDescription("Musisz oznaczyć osobę, którą chcesz pocałować!")
    .setFooter(`Wywołane przez ${message.author.tag}`)
    .setTimestamp())

    let caluj = (new RichEmbed()
    .setDescription(`**${message.author.username}** pocałował **${message.mentions.users.first().username}**!`)
    .setColor("RANDOM")
    .setTimestamp())
    message.channel.send(caluj)

}
module.exports.help = {
  name: "całuj",
  category: "4FUN",
  description: `Całujesz podaną osobę. Ta koemdna jest wyłącznie do rozrywki.
  {prefix}całuj <wzmianka>`,
  aliases: [],
  permLevel:"Użytkownik"
}
