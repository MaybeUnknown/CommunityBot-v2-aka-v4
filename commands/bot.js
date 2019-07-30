exports.run = async (client, message, args) => {
    const string = message.translate;
       const { RichEmbed } = require('discord.js');
       const embed = new RichEmbed().setTitle(`Informacje o Communitybocie`)
       .setDescription(`bot propozycja <twoja propozycja> - wysyła propozycje do developerów bota \n \n bot błąd <opis błędu> - wysyła do developerów bota inforamcje o błędzie w bocie\n \n bot alias <komenda> <alias> - wysyła na serwer supportu bota propozycje aliasu \n \n  zgłoszenie <ID użytkownika> , <opis zdarzenia> - wysyła do developerów bota zgłoszenie użytkownika. \n \n bot ocena <od 1-10> <opis> - wysyła ocene bota na serwer develoeprski\n \n `)
       .setColor("#00FFFF").setFooter(`Komenda użyta przez ${message.author.tag}`)
       message.channel.send(embed)
   }
   exports.help = {
       name: 'bot',
       category: "Bot",
           description: `
       Pokazuje informacje o Communitybocie
   {prefix}config set <klucz> <wartość>
       `,
       aliases: ["botifno"],
       permLevel:"Administrator"
     }
   