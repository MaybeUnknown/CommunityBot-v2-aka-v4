module.exports.run = async (client, message, args) => {
    let argum = message.content.split("|")
    argum[0] = argum[0].replace((require('quick.db').fetch(message.guild.id + ".prefix") || "c!") + "znak", "")
    const { RichEmbed, Attachment } = require('discord.js');
    if(argum[0] && argum[1] && argum[2] && argum[3]) {
        message.channel.send("Generuję obrazek...").then(async (mesg) => {
        let image = new Attachment(`http://www.customroadsign.com/generate.php?line1=${encodeURIComponent(argum[0])}&line2=${encodeURIComponent(argum[1])}&line3=${encodeURIComponent(argum[2])}&line4=${encodeURIComponent(argum[3])}`, "znak.jpg");
        await message.channel.send("Oto znak drogowy dla ciebie", image);
        mesg.delete();
    });
    } else {
        return message.channel.send("Musisz napisać co chcesz dać na znaku! Np. c!znak Droga|do|podlasia|xd");   
    }
  }
  
  module.exports.help = {
    name: "znak",
    category: "4FUN"
  }
  
