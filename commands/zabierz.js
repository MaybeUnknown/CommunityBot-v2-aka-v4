module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("nie masz permisji.");
    if(!args[0]) return message.reply(!args[1] ? "musisz podać użytkownika." : "musisz podać rolę.");
    let role = message.guild.roles.get(args[0])||message.guild.roles.find(r => r.name === args[0]);
    if(!role) return message.reply("musisz podać ID lub nazwę roli.");
    let member = message.mentions.members.first()||message.guild.members.get(args[1]);
    if(!member) return message.reply("musisz podać ID lub zmentionować użytkownika.");
    member.removeRole(role).then(() => {
      message.reply(`pomyślnie usunięto rolę \`${role.name}\` u <@${member.id}>`);
    }).catch((e) => {
      bot.console.log("Błąd podczas dodawania roli: "+e);
      message.reply("coś poszło nie tak. "+e);
    });
  }
  
  module.exports.help = {
      name: "zabierzrole",
      category: "administracyjne",
      description: `
  Zabiera rolę użytkownikowi.
  {prefix}zabierzrole <rola> <użytkownik>`,
      aliases: ["removerole"]
  }
  