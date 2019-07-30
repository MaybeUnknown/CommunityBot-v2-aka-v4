module.exports.run = async (client, message,args) => {
    const { RichEmbed } = require("discord.js")
    const arg = args.join(" ").toLowerCase().replace(/@everyone/g, "@ everyone").replace(/@here/g, "@ here");
   if (!arg){
     message.channel.send(new RichEmbed()
    .setColor("RANDOM")            
    .setDescription("Wpisz  tekst!")
    .setFooter(`Komenda użyta przez ${message.author.tag}`)
    .setTimestamp())
   return;
   }
   message.channel.send(`Oto spojler dla ciebie ${messsage.author.id}`+"||" + arg + "||");
   return;
   }
   
   module.exports.help = {
     name: "spoiler",
     category: '4FUN',
     description: `
     Pokazuje wpisany przez ciebie tekst w spojlerze
   {prefix}spojler,`,
     aliases: ["spojleruj"],
     permLevel:"Użytkownik"
   }