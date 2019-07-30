function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
  }
  
  var miesiaceZ31dniami = ["1", "3", "5", "7", "8", "10", "12"];
  
  exports.run = (client, message, args) => {
      const string = message.translate;
      const { RichEmbed } = require('discord.js')
    const rok = args[0];
    const miesiac = args[1];
    const dzien = args[2];
   
    if(args[1] > 12 || args[1] < 1) return message.channel.send(new RichEmbed().setColor("RANDOM")
                         .setAuthor(message.author.tag, message.author.avatarURL)
                         .setDescription(string.monthError));
    if(miesiaceZ31dniami.includes(miesiac)) {
      if(args[2] > 31 || args[2] < 1) return message.channel.send(new RichEmbed().setColor("RANDOM")
                         .setAuthor(message.author.tag, message.author.avatarURL)
                         .setDescription("Dni jest 31 w tym miesiącu"));
    } else {
      if(args[2] > 30 || args[2] < 1) return message.channel.send(new RichEmbed().setColor("RANDOM")
                         .setAuthor(message.author.tag, message.author.avatarURL)
                         .setDescription("Dni jest 30 w tym miesiącu"));
    }
     if (!args || !args[1] || !args[2]) return message.channel.send(new RichEmbed().setColor("RANDOM")
                         .setAuthor(message.author.tag, message.author.avatarURL)
                         .setDescription("Przykładowe użycie: <prefix>ileDni 2019 12 24"));
    let date = new Date();
    let koniecRoku = new Date(rok, miesiac-1, dzien); 
    if (date.getMonth()==11 && date.getDate()>25) koniecRoku.setFullYear(koniecRoku.getFullYear()+1); 
    let oneday = 1000*60*60*24;
    if(Math.ceil((koniecRoku.getTime()-date.getTime())/(oneday)) < 0) return message.channel.send(new RichEmbed().setColor("RANDOM")
                         .setAuthor(message.author.tag, message.author.avatarURL)
                         .setDescription("Ta data już była"));
    let zostalo = Math.ceil((koniecRoku.getTime()-date.getTime())/(oneday));
    message.channel.send(new RichEmbed().setColor("RANDOM")
                         .setAuthor(message.author.tag, message.author.avatarURL)
                         .addField("Do " + rok + " y " + miesiac + " m " + dzien + " d zostało:" , (isFinite(zostalo) ? zostalo : "Strasznie dużo" ) + (zostalo == 1 ? ' dzień' : " dni")));
  }
  
  
  module.exports.help = {
    name: "ileDni",
    category: "4FUN",
    description: `
  Podaje ile dni jest do wyznaczonej daty
  {prefix}ileDni <rok> <miesiac> <dzień>
  `,
    aliases: ["ile-do-daty","ileJeszcze","ile"],
    permLevel:"Użytkownik"
  }
