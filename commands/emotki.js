const Discord = require("discord.js");

module.exports.run = async (client, message) => {
      const { RichEmbed } = require('discord.js');
    try {

        let emojis;
        if (message.guild.emojis.size === 0) emojis = 'Na tym serwerze nie ma emotek!';
        else emojis = `**Emotki dla ${message.guild.name}**\n${message.guild.emojis.map(e => e).join(' ')}`;
        message.channel.send(emojis);
      
      } catch (err) {
        message.channel.send(`**${err.name}: ${err.message}**`)
      }
      
      }

 

module.exports.help = {
    name: "emotkiinfo",
    category: "Użytkownik",
    description: "Pokazuje wszystkie emotki, które są dodane na serwerze.",
    aliases: [],
    permLevel:"Użytkownik"
}
