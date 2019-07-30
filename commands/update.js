exports.run = async (client, message, args) =>  {
    const { RichEmbed } = require('discord.js');
   //|| message.author.id !== "566521151459819530" || message.author.id !== "396284197389729793"
    if (!client.developers.includes(message.author.id)) return message.channel.send(new RichEmbed().setDescription(":x: Brak uprawnień").setColor("#FF0000"))
    const cmd = require("node-cmd");
    cmd.get(`
       git pull origin v3
       `,
       async function(err, data, stderr){
           if (!err) {
             const { RichEmbed } = require("discord.js")

  message.channel.send(new RichEmbed()
    .setColor(3447003)
    .setTitle(`UPDEJTY BOTA`)
    .addField("Aktualizacje:", `\`\`\`bash\n${data}\n\`\`\``)).then(async () => {
              console.log('UPDEJTY :\n\n',data);
              const response = await client.awaitReply(message, "Zrestartować bota?");
              if(response==="y"||response==="yes"||response==="tak"||response==="t") {
                client.user.setGame("Bot jest restartowany...");
                await message.channel.send("Bot jest restartowany!");
                await cmd.get(
                  'pm2 restart index.js',
                  function(err, data, stderr){}
                );
              } else {
                message.channel.send("ok, nie będzie restartu");
              }
              })
           } else {
             const { RichEmbed } = require("discord.js")
             message.channel.send(new RichEmbed()
              .setColor(3447003)
              .setTitle(`UPDEJTY BOTA`)
              .addField("Błąd:", `\`\`\`bash\n${err}\n\`\`\``));
               console.log('error', err);
            }
        }
    );
 }

 
   exports.help = {
     name: 'update',
     category: "Bot owners",
     aliases: ["u"]
   }
