const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const { RichEmbed } = require('discord.js');
    let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!sUser)    return    message.channel.send(new RichEmbed()
    .setColor("RANDOM")            
    .setDescription(string.oz)
    .setFooter(string.message)
    .setTimestamp()).then(message => message.delete(30000));
    let reason = args.slice(1).join(' ')||string.lack;


    let awansEmbed = new RichEmbed()
    .setDescription(`**${string.get}**`)
    .setColor("RANDOM")
    .addField(string.awans,`${message.mentions.users.first().username}`)
    .addField(string.awansby, `${message.author.username}`)
    .addField(string.reason, reason)
    .setTimestamp()
    message.channel.send(awansEmbed)

}
module.exports.help = {
  name: "awans",
  category: "4FUN",
  description: `
Pozwala wansować wyznaczonego użytkownika. Uwaga ta komenda jest rozrywkowa.
{prefix}awans <wzmianka> <powód>
  `,
  aliases: [],
  permLevel:"Użytkownik"

}
