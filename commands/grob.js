var miesiace = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień"
  ];
  
  module.exports.run = async (client, message, args) => {
    const { RichEmbed } = require('discord.js');
    if(!args[0])  return  message.channel.send(new RichEmbed()
    .setColor("RANDOM")            
    .setDescription("Odznacz odpowiedniego użytkownika!")
    .setFooter(`Wywołane przez ${message.author.tag}`)
    .setTimestamp())
    var member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member) return  message.channel.send(new RichEmbed()
    .setColor("RANDOM")            
    .setDescription("Musisz oznaczyć osobę którą chcesz uśmiercić!")
    .setFooter(`Wywołane przez ${message.author.tag}`)
    .setTimestamp())
    let date = new Date();
      message.channel.send("Generuję obrazek...").then(async (mesg) => {
      let image = new RichEmbed.Attachment(`http://www.tombstonebuilder.com/generate.php?top1=RIP&top2=${encodeURIComponent("Spoczywaj w pokoju")}&top3=${encodeURIComponent(member.user.username)}&top4=${encodeURIComponent(`${date.getDate()} ${miesiace[date.getMonth()]} ${date.getFullYear()}`)}`, "grob.jpg");
      await message.channel.send("😢", image);
      mesg.delete();
    });
  }
  
  module.exports.help = {
    name: "grob",
    category: "4FUN",
    description: `Tworzy nagrobek z pdoanym nickiem.Ta koemnda jest wyłącznie do zabawy
    {prefix} <wzmianka>`,
    aliases: [],
    permLevel:"Użytkownik"
  }
  
