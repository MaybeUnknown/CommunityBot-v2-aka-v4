var steam = require('steam-provider')
var provider = new steam.SteamProvider();

exports.run = (client, message, args) => {
    let game = args[0]
    let steampng = "https://cdn.discordapp.com/attachments/540964717267648512/585474433351811073/steam_obra.jpg"
    if (!game) return message.reply('Wpisz poprawną grę!')
    provider.search(game).then(result => {
    provider.detail(result[0].id, "english", "en").then(results => {
    message.channel.send(new RichEmbed()
    .setAuthor('Steam Store', steampng)
  .setColor("RANDOM")
    .setTitle(result[0].name)
    .addField(`ID`, result[0].id)
    .setThumbnail(results.otherData.imageUrl)
    .addField(`Gatunki:`, results.genres)
    .addField(`Platformy:`, results.otherData.platforms, true)
    .addField(`Cena po obniżce:`,` **${results.priceData.initialPrice}** Cena normalna: **${results.priceData.finalPrice}** EUR  `, true)
    .addField(`Cechy:`, results.otherData.features, true)
    .addField(`Oceny użytkowników:`, results.otherData.metacriticScore, true)
    .addField('Twórca:', results.otherData.developer, true)
    .addField(`Dystrybutor:`, results.otherData.publisher)
  .setColor("RANDOM")).catch(e => {
        console.log(e)
        message.reply(`Nie ma gry ` + game + `na steamie!`)
    })
})
}) 
}
module.exports.help = {
  name: 'steam',
  category: '4FUN',
  description: `Informacje o danej grze z steamu.
  {prefix}steam <wybrany produkt>`,
  permLevel: "Użytkownik"

}