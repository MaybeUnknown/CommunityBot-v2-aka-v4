module.exports.run = async (client, message, args) => {
    let argum = message.content.split("|")
    argum[0] = argum[0].replace((require('quick.db').fetch(message.guild.id + ".prefix") || "c!") + "medal", "")
    const { RichEmbed, Attachment } = require('discord.js');
        message.channel.send("Generuję obrazek...").then(async (mesg) => {
        let image = new Attachment(`http://www.getamedal.com/generate.php?top1=${encodeURIComponent(argum[0])}&top2=${encodeURIComponent(argum[1] || "")}&top3=${encodeURIComponent(argum[2] || "")}&top4=${encodeURIComponent(argum[3] || "")}`, "znak.jpg");
        await message.channel.send("Oto medal dla ciebie", image);
        mesg.delete();
    });
  }
  
  module.exports.help = {
    name: "medal",
    category: "4FUN",
    description: `Tworzy medal z twoim napisem 
    {prefix}medal np. Medal|dla|wygranej|osoby`,
    aliases: [],
    permLevel:"Użytkownik"
  }
  
