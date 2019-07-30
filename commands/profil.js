exports.run = async (client, message, args) => {
  const db = require("quick.db")
   const string = message.translate;
   
    if (message.mentions.users.first() || args[0]) {
        user = message.mentions.users.first() || client.users.get(args[0]);
      } else {
        user = message.author;
      }
      if(!user) return message.channel.send("Podany użytkownik nie istnieje!")



let odznaki = db.fetch(user.id + "odznaki")                                                      
try {
odznaki = odznaki.replace("null", "")           
} catch (e) {
}

let status = " ";
if(user.presence.status === "online") {
status = "<:online:565501760702119946>";
}
if(user.presence.status === "dnd") {
  status = "<:dnd:565501599506759681>";
}
if(user.presence.status === "idle") {
  status = "<:idle:565501707501568032>";
}
if(user.presence.status === "offline") {
  status = "<:offline:565501658935590922>";
}

const moment = require("moment");
moment.locale("pl");
const { RichEmbed } = require("discord.js")
const member = message.guild.member(user);
const embed = new RichEmbed()
  .setColor(db.fetch(user.id + ".kolorProfil") || "#6495ED")
  .setThumbnail(user.displayAvatarURL)
  .setDescription(`:bust_in_silhouette: **${string.name}**: ${db.fetch(user.id + "imie") || string.profilError}\n<:Facebook:564739173005787156> **Facebook**: ${db.fetch(user.id + "facebook") || string.profilError}\n<:tiktok:564739156975026186> **Tiktok**: ${db.fetch(user.id + "tiktok") || string.profilError}\n<:Spotify:564739629379616778> **Spotify**: ${db.fetch(user.id + "spotify") || string.profilError}\n<:snapchat:564739139765796874> **Snapchat**: ${db.fetch(user.id + "snapchat") || string.profilError}\n<:instagram:564739148284559361> **Instagram**: ${db.fetch(user.id + "instagram") || string.profilError}`)
  .setTitle(`${string.profilTitle} ${user.username}#${user.discriminator} ` + status)
 .addField(string.badges, odznaki || string.badgesError)
  message.channel.send(embed)

}   
 module.exports.help = {
    name: 'profil',
    category: 'Użytkownik',
    description: `Pokazuje twój lub podanej osoby profil. Swój profil możesz ustawić w panelu bota. 
    {prefix}profil <wzmianka lub ID >`,
    aliases: ["Profil"],
    permLevel:"Użytkownik"
  }
