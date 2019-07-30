module.exports.run = async (client, message, args) => {
    const { RichEmbed } = require('discord.js')
  const m = await message.channel.send("Chwila...");
  m.edit(new RichEmbed()
         .setTitle("🏓")
         .addField("Wiadomość", `${m.createdTimestamp - message.createdTimestamp}ms`) 
         .addField("API", Math.round(client.ping)+"ms"));
}

module.exports.help = {
    name: "ping",
    category: "Bot",
    description: `Pokazuje ping bota.
    {prefix}ping`,
    aliases: [],
    permLevel:"Użytkownik"
}
