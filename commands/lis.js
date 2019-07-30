module.exports.run = async (client,message,args) => {
    const sa = module.require('superagent');
const { RichEmbed } = require("discord.js")
let {body} = await sa.get('https://api-to.get-a.life/foximg');


const msg = await message.channel.send("Szukam lisa...")
let embed = new RichEmbed()
  .setColor('#f4df42')
  .setImage(body.link).setFooter("Używam API https://api-to.get-a.life/foximg"); 


return msg.edit(embed);
  }

  module.exports.help = {
    name: "lis",
    category: 'Obrazy',
    description: `Pokazuje losowego lisa
    {prefix}lis`,
    aliases: [],
    permLevel:"Użytkownik"
}