const db = require('quick.db');
module.exports.run = async (client, message, args) => {
    const { RichEmbed } = require('discord.js');
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.repky(`:x: Nie masz permisji, aby użyć tej komendy!`)
    var member = args[0];
    if(!member || member.length != 18) return  message.reply(`Wpisz poprawne ID!`)
    message.guild.unban(member)
           .catch(error => message.reply(` ${message.author} nie mogę odbanować tego użytkownika: ${error}`))
           .then(() => message.channel.send(`Użytkownik o ID ${member} został odbanowany przez ${message.author.tag}.`));
           client.users.get(uzytkownik).send(new RichEmbed()
                                    .setColor("#FFD700")
                                    .setAuthor(client.users.get(uzytkownik).tag, client.users.get(uzytkownik).displayAvatarURL)
                                    .setDescription(`**Modernizator**: ${message.author.tag}\n**Powód**: ${reason}`).setFooter("Odbanowano użytkownika").setTimestamp()).catch(console.error);  
  setTimeout(async function(){
      await member.ban(reason)
      .catch(error => message.reply(string.banErrorTwo + error));
      message.channel.send("Odbanowano użytkownika")
  }, 3000);
           message.guild.channels.find("name", db.fetch(message.guild.id + '.mod-log')).send(new RichEmbed()
                                                                                    .setColor("#FFD700")
                                                                                    .setAuthor(client.users.get(uzytkownik).tag, client.users.get(uzytkownik).displayAvatarURL)
                                                                                    .setDescription(`**Modernizator**: ${message.author.tag}\n**Powód**: ${reason}`).setFooter("Odbanowanie").setTimestamp()).catch(console.error);  
}
module.exports.help = {
    name: "unban",
    category: 'administracyjne',
    description: `Odbanowuje wziankowaną osobę.
{prefix}unban <ID> [powód]`,
  aliases: ["UnBan"],
  permLevel: "Modernizator"
}