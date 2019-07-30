exports.run = async (client, message, args) => {
        const uzytkownik = message.mentions.users.first().id;
      const db = require('quick.db')
      const { RichEmbed } = require('discord.js');
      if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: Musisz posiadać permisje do `KICK_MEMBERS`")
      
      let member = message.mentions.members.first();
      if(!member)
        return message.channel.send(":x: Musisz oznaczyć tego kogo chcesz wyrzucić!");
      if(!member.kickable) 
        return message.channel.send(":x: Nie moge wyrzucic tej osoby");
  
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "Nie podano powodu";
     
      client.users.get(uzytkownik).send(new RichEmbed()
  .setColor('#00CED1')
  .setAuthor(client.users.get(uzytkownik).tag, client.users.get(uzytkownik).displayAvatarURL)
  .setDescription(`**Moderator**: ${message.author.tag}\n**Powód**: ${reason}`).setFooter("KICK").setTimestamp()).catch(console.error);  
  
  setTimeout(async function(){
      await member.kick(reason)
        .catch(error => message.reply("Wystąpił bład " + error));
        message.channel.send("Wyrzucono!")
      }, 1500);
  
  
  
  
  message.guild.channels.find("name", db.fetch(message.guild.id + '.mod-log')).send(new RichEmbed()
  .setColor('#00CED1')
  .setAuthor(client.users.get(uzytkownik).tag, client.users.get(uzytkownik).displayAvatarURL)
  .setDescription(`**Moderator**: ${message.author.tag}\n**Powód**: ${reason}`).setFooter("KICK").setTimestamp()).catch(console.error);  
      }
      exports.help = {
          name: 'kick',
          category: "administracyjne",
          description: `Wyrzuca wzmiankowaną osobę. Można też podać powód
          {prefix}kick <wzmianka> <powód>`,
          aliases: [],
          permLevel:"Modernizator"
        }
  