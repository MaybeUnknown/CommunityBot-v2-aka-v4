exports.run = async (client, message, args) => {
    const { RichEmbed } = require("discord.js");
    let rzeczy = args.join(" ").split(",");
    if(rzeczy.length<2) return message.channel.send("Muszą być minimum 2 rzeczy do wybrania\nnp. c!wybierz sans granie, dziad ufolud");
    let rand = Math.floor(Math.random() * rzeczy.length);
    message.channel.send(new RichEmbed().setColor("RANDOM")
                             .addField("Wybrana rzecz:", rzeczy[rand]));
}
    
exports.help = {
    name: "wybierz",
    category: '4FUN',
    description: `
Wybiera losową rzecz
{prefix}wybierz <rzecz1>, <rzecz2>, [rzecz3], [rzecz4] ...
    `
}
