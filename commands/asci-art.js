const ascii = require('ascii-art');

exports.run = async (client, message, args) => {
    const { RichEmbed } = require('discord.js')
    if (!args.join(' '))   return  message.channel.send(new RichEmbed()
    .setColor("RANDOM")
    .setDescription("Wpisz tekst")
    .setFooter("Wiadomość zostanie usunięta po 30 sekundach!")
    .setTimestamp()).then(msg => {
        msg.delete(30000); 
        message.delete();
        });
    
    

    ascii.font(args.join(' '), 'Doom', async txt =>{
        message.channel.send(txt, {
            code: 'md'
        });
    })
};
  
exports.help = {
  name: "ascii art",
  category: '4FUN',
  description: `
  Pokazuje twój wpisany tekst w ascii-art.
{prefix}ascii art <tekst>
  `,
  aliases: [],
  permLevel:"Użytkownik"
}
