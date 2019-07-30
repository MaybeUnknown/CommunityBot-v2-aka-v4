const Discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (client, message, args, level) => {
  const { RichEmbed }  = require("discord.js")
  if(!args[0]||args[0] <= 0)   return  message.channel.send(new RichEmbed()
  .setColor("RANDOM")
  .setDescription("Musisz podać poprawny czas!")
  .setFooter(`Komenda użyta przez ${message.author.tag}`)
  .setTimestamp());
  if (!args[1]) return   message.channel.send("Wpisz treść przypomnienia!")
  var Timer = args[0];
  message.channel.send(new RichEmbed().setColor("RANDOM")
                      .setTitle("Pomyślnie ustawiono przypomnienie! ")
                      .setTimestamp());
  setTimeout(() => {
 message.author.send(new RichEmbed()
    .setColor("RANDOM")
    .setTitle(`Przypomnienie!`)     
    .setDescription([1]))
  }, ms(Timer));
}

module.exports.help = {
  name: "przypomnienie",
  category: "4FUN",
  description: `Bot przypomina ci na wiadomości prywatne po ustawionym czasie!
  {prefix}przypomnienie`,
  aliases: ["przyp", "Przypomnienie"],
  permLevel: "Użytkownik"
  
};