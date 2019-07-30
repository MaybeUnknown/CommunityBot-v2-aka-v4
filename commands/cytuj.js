exports.run = async (client, message, args, level) => {
    try {
      const {RichEmbed} = require("discord.js");
      const string = message.translate;
      if (!Number.parseInt(args[0])) return message.channel.send(`Podaj ID wiadomości!`);
              let embed = new RichEmbed()
                  .setDescription(`Szukam wiadomości...`)
                  .setColor('RANDOM')
              await message.channel.send(embed).then(async msg => {
                  await message.channel.fetchMessages({ limit: 100 }).then(async messages => {
                      var find = messages.find(m => m.id == args[0]);
                      if (find) {
                          var pictures = find.attachments.find(a => a.filename.endsWith(".png") || a.filename.endsWith(".jpg") || a.filename.endsWith(".gif"));
                          embed.setDescription(find.content);
                          embed.setColor("RANDOM");
                          embed.setAuthor(find.author.tag, find.author.avatarURL);
                          if (pictures) embed.setImage(pictures.url);
                          embed.setFooter(`${string.cmd} ${message.author.tag}`);
                          embed.setTimestamp(find.createdTimestamp);
                          await msg.edit(embed);
                          return true;
                      } else {
                          embed.setDescription(`Szukam po innych kanałach...`);
                          await msg.edit(embed);
                          await message.guild.channels.forEach(async ch => {
                              if (ch.type == 'category' || ch.type == 'voice') return;
                              await ch.fetchMessages({ limit: 100 }).then(async messages => {
                                  var find = messages.find(m => m.id == args[0]);
                                  if (find) {
                                      var pictures = find.attachments.find(a => a.filename.endsWith(".png") || a.filename.endsWith(".jpg") || a.filename.endsWith(".gif"));
                                      embed.setDescription(find.content);
                                      embed.setColor("RANDOM");
                                      embed.setAuthor(find.author.tag, find.author.avatarURL);
                                      embed.addField(`Kanał:`, find.channel.toString(), true)
                                      if (!find.guild.id == message.guild.id) embed.addField(`Serwer:`, find.guild.name, true);
                                      if (pictures) embed.setImage(pictures.url);
                                      embed.setFooter(`${string.cmd} ${message.author.tag}`);
                                      embed.setTimestamp(find.createdTimestamp);
                                      await msg.edit(embed);
                                      return true;
                                  }
                              })
                          })
                          await embed.setDescription(`Nie znaleziono wiadomości!`);
                          await embed.setColor("RANDOM");
                          await msg.edit(embed);
                      }
                  });
              });
    } catch(e) {
      console.log(e);
    }
  }
  
  exports.help = {
    name: "cytuj",
    category: "Użytkownik",
    description: `Cytuje  wiadomość
    {prefix}cytuj <ID wiadomości>`,
    aliases:["Cytuj"],
    permLevel:"Użytkownik"
  };
