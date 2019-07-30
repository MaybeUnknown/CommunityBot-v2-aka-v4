const Discord = require("discord.js");
module.exports.run = async (client, message) => {
        const { RichEmbed } = require('discord.js');
  let invite = new RichEmbed()
  .setTitle(`Link do dodania ${client.user.username}a`)
.setColor("RANDOM")
.setDescription("https://discordapp.com/api/oauth2/authorize?client_id=540951867233009666&permissions=2146827767&scope=bot")
.setTimestamp() 
  message.channel.send(invite)
  return;
}



module.exports.help = {
    name: "invite",
    category: "Bot",
    description: `Pokazuje przydatne linki w bocie.
    {prefix}invite`,
    aliases: [],
    permLevel:"Użytkownik"
}
