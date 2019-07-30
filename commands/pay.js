exports.run = async (client, message, args) => {
    const string = message.translate;
    const db = require('quick.db')
    const kasa = db.fetch(message.author.id + message.guild.id + ".kasa");
    const { RichEmbed } = require('discord.js');
    if(!message.mentions.members.first() || !args[0]) return message.channel.send("Komu chcesz zapłacić? Musisz @ osobe lub podac ID w nastepnym użyciu komendy.");
    let id
    if(message.mentions.members.first()) {
        id = message.mentions.members.first().id;
    } else {
        if(client.users.get(args[0])) {
            id = args[0];   
        } else {
            return message.channel.send("ID jest nieprawidłowe!")
        }        
    }
    if(isNaN(args[1])) return message.channel.send("Musisz podać poprawną kwotę!");
    if(args[1] > kasa) return message.channel.send("Musisz podac mniejszą ilość pieniędzy! Aktualnie masz "  + kasa);
    db.subtract(message.author.id + message.guild.id + ".kasa", args[1]);
    db.add(id + message.guild.id + ".kasa", args[1]);
    message.channel.send("Przelano " + args[1] + " pieniędzy do " +  client.users.get(id).tag);
}

exports.help = {
    name: 'pay',
    category: "Economy",
    description: `Płacisz wybranej osobie.
    {prefix}pay <wzmianka lub ID osoby >`,
    aliases: ["zapłać", "przelew", "pożyczka"],
    permLevel: "Użytkownik"
  }
