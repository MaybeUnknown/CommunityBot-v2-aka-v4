module.exports.run = async (client, message, args, tools) => {
    if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send("nope");
    if(!args) return message.channel.send("nope");
    if(message.guild.emojis.find(e=>e.name===args[0])) return message.channel.send("Ta emotka już istnieje");
    let user = client.users.get(args[0]);
    if(!user) return message.channel.send("Nie ma takiego użytkownika");
    let emoji = await message.guild.createEmoji(user.displayAvatarURL, args[0]);
    message.channel.send("Utworzono emoji: "+emoji);
}
module.exports.help = {
  name: "useremoji",
  description: `Tworzy emotke z avatarem wybranej osoby
  {prefix}useremoji (ID osoby)`,
  category: "Obrazy",
  permLevel: "Użytkownik"
}
