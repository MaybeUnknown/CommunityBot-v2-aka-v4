exports.run = async (client, message, args) => {
    const { RichEmbed } = require('discord.js');
    if (message.author.id !== "494017032283619329" && message.author.id !== "566521151459819530") return message.channel.send(new RichEmbed().setDescription(":x: Brak uprawnień").setColor("#FF0000"))
    var cmd = require('node-cmd');
client.user.setGame("Bot jest restartowany...")
    cmd.get(
        'pm2 restart index.js',
        function(err, data, stderr){
            message.channel.send("Bot jest restartowany!")
        }
    );
    


    }
    exports.help = {
        name: 'restart',
        category: 'Użytkownik',
        description: `Rsetuje bota. Uwaga ta koemdna jest wyłącznie dla deweloperów bota. 
        {prefix}restart`,
        aliases: ["r"],
        permLevel:"Deweloper bota"
      }
