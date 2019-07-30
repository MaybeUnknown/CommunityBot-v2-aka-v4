const Discord = require("discord.js");
exports.run = (client, message, args) => {
    var losowa = Math.floor(Math.random() * 10) + 1
    var gwiazdki = "";
    if(losowa == 1) {gwiazdki = ":star:"}
    if(losowa == 2) {gwiazdki = ":star::star:"}
    if(losowa == 3) {gwiazdki = ":star::star::star:"}
    if(losowa == 4) {gwiazdki = ":star::star::star::star:"}
    if(losowa == 5) {gwiazdki = ":star::star::star::star::star:"}
    if(losowa == 6) {gwiazdki = ":star::star::star::star::star::star:"}
    if(losowa == 7) {gwiazdki = ":star::star::star::star::star::star::star:"}
    if(losowa == 8) {gwiazdki = ":star::star::star::star::star::star::star::star:"}
    if(losowa == 9) {gwiazdki = ":star::star::star::star::star::star::star::star::star:"}
    if(losowa == 10) {gwiazdki = ":star::star::star::star::star::star::star::star::star::star:"}
    let emb = (new RichEmbed()
    
            .setDescription(`Oceniam na**`+losowa+ "/10**")
            .addField("Gwiazdki", gwiazdki)
            .setColor("RANDOM")
            .setFooter(`${string.cmd} ${message.author.tag}`)
            .setTimestamp())
            message.channel.send(emb);
}
module.exports.help = {
    name: "oceń",
    category: "4FUN",
    description: `Bot ocenia twoją rzecz
    {prefix}oceń <rzecz>`,
    permLevel: "Użytkownik"
  }