exports.run = async (client, message, args, level) => {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`Nie posiadasz uprawnień!`);
      var ms = require('ms');
      const { RichEmbed } = require('discord.js')
      var time = ms(args[0]); 
      if (isNaN(time)) return message.reply(`Podaj poprawny czas trwania!`);
      if (isNaN(args[1])) return message.reply(`Podaj poprawną ilość osób które mają dostać nagrodę!`);
      var users = parseInt(args[1]);
      var text = args.slice(2).join(" "); 
      message.channel.send(new RichEmbed().setColor("RANDOM")
          .setTitle(`Giveaway na ${text}!`)
          .setDescription(`Kliknij 🎉 aby wziąć udział!`)
            .setFooter("Giveaway")
            .setTimestamp())
          .then((mesg) => {
              mesg.react("🎉");
              setTimeout(async () => {
                  let total = await mesg.reactions.get("🎉").fetchUsers();
                  total = total.array().filter(u => u.id != client.user.id);
                  if (!total.length) return mesg.edit(new RichEmbed().setColor("RANDOM")
                  .setTitle(`Giveaway na ${text}!`)
                  .setDescription(`Nikt nie wziął udziału w giveaway.`)
                    .setFooter("Giveaway")
                    .setTimestamp());
                  var randomUsers = total.filter(xd=>xd.id!==client.user.id).sort(() => 0.5 - Math.random()).slice(0,users);
                  if(randomUsers.length>1) {
                    mesg.edit(new RichEmbed()
                      .setTitle(`Giveaway`).setColor("RANDOM")
                      .setDescription(`Wygrali ${randomUsers.map(u=>`<@${u.id}>`).join(", ")} `)
                        .setFooter(`Koniec giveaway`)
                        .setTimestamp());
                    mesg.channel.send(`Gratuluje **${randomUsers.map(u=>`<@${u.id}>`).join(", ")}** wygrali ${text}!🎉`);
                  } else {
                    mesg.edit(new RichEmbed()
                      .setTitle(`Giveaway`).setColor("RANDOM")
                      .setDescription(`Wygrał ${randomUsers[0]}`)
                        .setFooter(`Koniec giveaway`)
                        .setTimestamp());
                    mesg.channel.send(`Gratuluje **${randomUsers[0]}** wygrał ${text}!🎉`);
                  }
              }, time);
          });
    };
    exports.help = {
      name: "giveaway",
      category: "Administracyjne",
      description: `Tworzy giveaway
      {prefix}giveaway <czas> <liczba_osób> <treść>`,
      aliases: [],
      permLevel:"Zarządzanie serwerem"
    };
  