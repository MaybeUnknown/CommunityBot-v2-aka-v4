var math = require('mathjs');
const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {
   let input = args.join(" ");
  if (!input) {
      message.channel.send(`Wpisz równanie!`);
      return;
  }
  const question = args.join(" ")
  let answer;
  try {
      answer = math.eval(question);
  } catch (err) {
      return message.reply(`Musisz podać poprawne równanie!`);
  }
  const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .addField(`Równanie` + ":", question, true)
      .addField(`Wynik` + ":", answer)

  message.channel.send({
      embed
  })
}
exports.help = {
  name: "oblicz",
  category: "4FUN",
  description: `Bot liczy twoje dowolne równienie
 {prefix}oblicz <równanie> `,
 aliases: [],
 permLevel:"Użytkownik"
}