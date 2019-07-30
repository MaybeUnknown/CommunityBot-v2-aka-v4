const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client,message,args) => {

  let{body} = await superagent
  .get(`http://aws.random.cat/meow`);

  let catembed = new Discord.RichEmbed()
  .setColor("RANDOM")
.setFooter("http://aws.random.cat/meow")
  .setImage(body.file);

  message.channel.send(catembed);

}
module.exports.help = {
    name: "cat",
    category: 'Obrazy',
    description: `
    Pokazuje losowe zdjęcie kota.
{prefix}kot
    `,
    aliases: ["Kot"],
    permLevel:"Użytkownik"
}
