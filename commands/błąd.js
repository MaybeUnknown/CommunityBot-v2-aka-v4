module.exports.run = async (client, message, args) => {
    const { RichEmbed }  = require("discord.js")
    const propo = args.join(" ");
    if (!propo){
     return message.channel.send(new RichEmbed()
       .setAuthor(message.author.tag)
       .setDescription("Musisz wpisać treść błędu!")
       .setColor("#f55d42"));
    }
   var prop = await client.channels.get("593053651883524106").send(new RichEmbed()
     .setAuthor(message.author.tag)
     .setTitle("Zgłoszono błąd!")
     .setDescription(propo)
     .setColor("#f55d42"));
     
    await prop.react("👍");
    await prop.react("👎");
    
    message.channel.send(new RichEmbed()
      .setAuthor(message.author.tag)
      .setColor("#f55d42")
      .setDescription(`**Dziękujemy za zgłoszenie błędu!**`));
   } 
   
  module.exports.help = {
   name: "błąd",
    category: "Bot",
    description: `
    Zgłaszasz do developerów bota błąd w bocie.
{prefix}błąd <treść>
    `,
    aliases: [],
    permLevel:"Użytkownik"
  } 