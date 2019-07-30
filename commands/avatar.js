const Discord = require("discord.js");

exports.run = async (client, message, args) => {
     const string = message.translate;
    let user
    const { RichEmbed } = require('discord.js');
  if (message.mentions.users.first() || args[0]) {
        user = message.mentions.users.first() || client.users.get(args[0]);
      } else {
        user = message.author;
      }
      
 if(!user) return message.channel.send("Podany użytkownik nie istnieje")
message.channel.send(new RichEmbed().setImage(user.displayAvatarURL).setTitle(string.avatarTitle + user.tag).setColor("RANDOM"))
 }
exports.help = {
    name: "avatar",
    category: 'Obrazy',
    description: `
    Pokazuje wzmiankowanej osoby powiększony awatar
{prefix}avatar <wzmianka>
    `,
    aliases: ["awatar"],
    permLevel:"Użytkownik"
}
