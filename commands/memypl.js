module.exports.run = async (client, message, args) => {
    if (!client.developers.includes(message.author.id)) return message.channel.send(new Discord.RichEmbed().setDescription(":x: Brak uprawnień").setColor("#FF0000"))
    const sa = module.require('superagent');
    const { RichEmbed } = require("discord.js")
    const msg = await message.channel.send("Wyszukiwanie mema...");
    let {body} = await sa.get('https://jeb-z-dzidy.glitch.me/');
    let embed = new RichEmbed()
      .setColor('RANDOM')
      .setTitle(body.title)
      .setURL(body.posturl)
      .setImage(body.url)
      .setFooter("Memy pochodzą ze strony http://jbzdy.co"); 
    msg.edit(embed);
  }
  module.exports.help = {
      name: "memepl",
      category: "4FUN",
          description: `
    Pokazuje losowe memy.
    {prefix}memepl
    `,
      aliases: [],
      permLevel:"Użytkownik"
  }
  