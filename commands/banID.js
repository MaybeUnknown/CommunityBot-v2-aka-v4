module.exports.run = (client, message, args, discord) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Nie masz permisji do używania tej komendy!")
 let mid = args.join(' ');
 client.fetchUser(mid).then(id => {
   message.guild.ban(id).catch(err => {
     message.channel.send(`${message.strings.failedtoban}`+id)
     console.log(err)
    })
    message.channel.send(`Został zbanowany ${id}!`)
   }).catch(() => {
    message.channel.send(`Nie został zbanowany ${mid}!`)
})
}
module.exports.help = {
name: "banid",
category: "Administracyjne",
description: `
Banuje podanego użytkownika poprzez ID. Można też dodać powód banu.
{prefix}banid <ID użytkownika> <powód>
`,
aliases: [],
permLevel:"Modernizator"
}