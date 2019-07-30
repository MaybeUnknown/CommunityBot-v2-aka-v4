exports.run = async (client, message, args, level) => {
    const { RichEmbed } = require("discord.js");
    const info = new RichEmbed()
    .setColor("RANDOM")
    .setTitle("Informacje o CommunityBocie")
    .setDescription(`CommunityBot  jest jednym z najlepszych polskich botów!\n Posiada wiele komend z kategori ekonomicznej, muzycznej, administracyjnych, leveli itp.\n Jego domyśny prefix to c!\n\n c!propozycja <tekst>\n  c!błąd <opis błędu>\n   c!oceń <ocena> <opis>\n  c!pomoc <treść>\n   c!alias <nazwa komendy>  <alias>`)
  .addField(`Najpotrzebniejsze  linki:`, `[Support](https://discord.gg/ayQsJMG) 
  [Link do dodania bota](https://discordapp.com/oauth2/authorize?client_id=540951867233009666&permissions=8&scope=bot)
  [Zagłosuj na bota](https://discordbots.org/bot/540951867233009666/vote)
  [Panel](http://rkubapl.malopolska.pl:8888/)`)                                                           
  .setTimestamp()
  .setFooter(`Komenda użyta przez  ${message.author.tag}`)
  message.channel.send(info)
  };
  module.exports.help = {
    name: "botinfo",
    category: "bot",
    description: "Informacje o CommmunityBocie",
    aliases: [],
    permLevel:"Użytkownik"
  }
    