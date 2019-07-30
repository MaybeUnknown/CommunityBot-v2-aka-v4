module.exports.run = async (client, message, args) => {
    let argum = message.content.split("|")
    argum[0] = argum[0].replace((require('quick.db').fetch(message.guild.id + ".prefix") || "c!") + "ciastko", "")
    const { RichEmbed, Attachment } = require('discord.js');
    if(argum[0] && argum[1] && argum[2] && argum[3]) {
        message.channel.send("Generuję obrazek...").then(async (mesg) => {
        let image = new Attachment(`http://www.cakemessage.com/generate.php?top1=${encodeURIComponent(argum[0])}&top2=${encodeURIComponent(argum[1])}&top3=${encodeURIComponent(argum[2])}&top4=${encodeURIComponent(argum[3])}`, "znak.jpg");
        await message.channel.send("Oto ciastko dla ciebie", image);
        mesg.delete();
    });
    } else {
        return message.channel.send("Musisz napisać co chcesz dać na ciastku! Np. c!ciastko Droga|do|podlasia|xd");   
    }
  }  
  module.exports.help = {
    name: "ciastko",
    category: "4FUN",
    description: `Dajesz komuś ciastko razem z wypisanymi słowami na nim.
    {prefix}ciastko Dla|bot| z|okazji| dnia dzisiejszego`,
    aliases: [],
    permLevel:"Użytkownik"
  }
