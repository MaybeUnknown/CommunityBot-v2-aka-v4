const hastebin = require('hastebin-gen');
exports.run = (client, message, args, tools) => {
const string = message.translate;
const { RichEmbed } = require('discord.js')
  hastebin(args.join(' '), "js").then(r => {
      var hastLink = r
      const hastebin = new RichEmbed()
      .setColor("RANDOM")
      .setURL(hastLink)
      .addField("Link: ", `${hastLink}`)
      .setFooter(`${string.cmd} ${message.author.tag}`);
       message.channel.send( hastebin)
  }).catch(console.error);  
}
module.exports.help = {
  name: "hastebin",
  category: "Użytkownik",
  description: `Pokazuje wpisany tekst w hastebinie.
  {prefix}hastebin <tekst>`,
  aliases:[],
  permLevel:"Użytkownik"
}