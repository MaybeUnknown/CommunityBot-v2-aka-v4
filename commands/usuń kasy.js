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
    if(!args[1]) return message.channel.send("Nie podano ile kasy mam odjąć!");
    if(isNaN(args[1])) return message.channel.send("Liczba pieniędzty musi być kwotą!");
    if(args[1] > db.fetch(id + message.guild.id + ".kasa")) return message.channel.send("Próbujesz odjąć za dużo pieniędzy! Możesz odjąć max. " + db.fetch(id + message.guild.id + ".kasa") + " mu/jej.");
    db.subtract(id + message.guild.id + ".kasa", args[1]);
    return message.channel.send("Użytkownikowi `" + client.users.get(id).tag + "` odjęto " + args[1] + " pieniędzy do bota!");
}
  
  module.exports.help = {
      name: "usunkasy",
      category: "Economy",
          description: `
    Usuwa pieniądze oznaczonmu użytkownikowi 
    {prefix}usunkasy <wzmianka>
    `,
    aliases: [],
      permLevel:"Administrator"
  }
