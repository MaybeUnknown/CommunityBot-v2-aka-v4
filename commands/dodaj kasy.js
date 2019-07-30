const db = require('quick.db');


module.exports.run = async (client, message, args) => { 
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Nie masz permisji do tego!");
    if(!message.mentions.members.first() && !args[0]) return message.channel.send("Nie podano użytkownika!");
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
    if(!args[1]) return message.channel.send("Nie podano ile kasy mam dodać!");
    if(isNaN(args[1])) return message.channel.send("Liczba pieniędzty musi być kwotą!");
    db.add(id + message.guild.id + ".kasa", args[1]);
    return message.channel.send("Użytkownikowi `" + client.users.get(id).tag + "` dodano " + args[1] + " pieniędzy do bota!");
}
  
  module.exports.help = {
      name: "dodajkasy",
      category: "4FUN",
          description: `
    DEMOTYWATORY
    {prefix}demotywatory
    `,
      permLevel:"Administrator"
  }
