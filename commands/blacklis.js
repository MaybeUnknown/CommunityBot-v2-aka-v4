exports.run = (client, message, args) => {
    const db = require('quick.db');
    if(message.author.id !== "566521151459819530" && message.author.id !== "494017032283619329") return message.channel.send(":x: Nie masz permisji!");
    const string = message.translate;
    const { RichEmbed } = require('discord.js');
     let member = message.mentions.members.first();
     if(!args[0]) return message.channel.send("`dodaj` lub `usun`")
     if(args[0] === "dodaj") {
if(!args[1] && !member) return message.channel.send("Nie podano użytkownika ani ID.")
 const b = member.id || args[1];
 db.set(b + ".black", true);
 message.channel.send((client.users.get(b).tag || "Nie znam tagu") + " został zblacklistowany!")
     }
if(args[0] === "usun") {
if(!args[1] && !member) return message.channel.send("Nie podano użytkownika ani ID.")
 const b = member.id || args[1];
 db.set(b + ".black", false);
 message.channel.send((client.users.get(b).tag || "Nie znam tagu") + " został usunięty!")
     }
                 
}

exports.help = {
  name: "blacklist",
  category: 'Bot Owner',
  description: `
 Blokuje korzystanie z bota 
{prefix}blacklist <wzmianka> <powód>
  `,
  aliases: [],
  permLevel:"Programista bota"
}
