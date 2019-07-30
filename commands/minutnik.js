const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args, level) => {
  const { RichEmbed } = require('discord.js');
  if(!args[0]||args[0] <= 0) return message.channel.send(`Musisz podać poprawny czas np. 1s , 1h `);
  var Timer = args[0];
  message.channel.send(new RichEmbed()
  .setColor("RANDOM")
  .setTitle("Pomyślnie ustawiono minutnik na "  + `${ms(ms(Timer), {long: true})}`)
  .setTimestamp());
  setTimeout(() => {
  message.channel.send(`⏰ Czas minął minutnik trwał  ${ms(ms(Timer), {long: true})}` + message.author.toString())
  }, ms(Timer));
}
module.exports.help = {
  name: "minutnik",
  category: "Użytkownik",
  description: `{prefix}minutnik <czas>`,
  aliases:[],
  permLevel: "Użytkownik"
};