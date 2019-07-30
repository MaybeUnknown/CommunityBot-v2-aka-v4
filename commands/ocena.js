module.exports.run = async (client, message, args, level) => {
const { RichEmbed } = require("discord.js");
if(!args[0]) return message.channel.send("Nie podano oceny od 1 do 10 ani dlaczego.");
if(!args.join(1)) return message.channel.send("Dopisz uzasadnienie swojej oceny.");
let idkanalu = "587643221111209995";
client.channels.get(idkanalu).send(new RichEmbed().setAuthor(message.author.tag, message.author.avatarURL).addField("Ocena", args[0]).addField("Powód", args.slice(1)).setFooter("ID użytkownika " + message.author.id).setColor("RANDOM"));
message.channel.send(new RichEmbed()
.setAuthor(message.author.tag)
.setThumbnail(message.author.avatarURL)
.setColor("RANDOM")
.setDescription(`**Dziękujemy za wysłanie opini o naszym bocie**`));
}
module.exports.help = {
  name: "ocena",
  category: "Bot",
  description: `Oceniasz naszego bota 
  {prefix}ocena <od 1 do 10> <uzasadnienie>`,
  aliases:[],
  permLevel: "Użytkownik"
}