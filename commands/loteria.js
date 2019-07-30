exports.run = async (client, message, args) => {
    const db = require('quick.db');
    const { RichEmbed } = require('discord.js');
if (db.fetch(message.author.id + ".kasa") < 20) {
    return message.channel.send("Nie stać cie!")
}
db.subtract(message.author.id + ".kasa", 20)

const losowanie = Math.floor(Math.random() * 6 + 1)
if (losowanie === 1) {
message.channel.send("Przegrałeś/aś!")

}
if (losowanie === 2) {

const ilosckasy = Math.floor(Math.random() * 100 + 1)  

  const hajsy = ilosckasy - 20;
  if (hajsy > 0) {
     return message.channel.send(new RichEmbed().setTitle("Loteria").addField("Zysk", hajsy).addField("Wygrana", `Wygrałeś/aś ${ilosckasy}` + "$ do Jacob Bota").setFooter(message.author.tag))
  }
  if (hajsy < 0) {
   return   message.channel.send(new RichEmbed().setTitle("Loteria").addField("Strata", Math.abs(hajsy)).addField("Wygrana", `Wygrałeś/aś ${ilosckasy}` + "$ do Jacob Bota").setFooter(message.author.tag))
  }
  

db.add(message.author.id + ".kasa", ilosckasy)


}
if (losowanie === 3) {
  const ilosckasy = Math.floor(Math.random() * 100 + 1)  

      const hajsy = ilosckasy - 20;
      if (hajsy > 0) {
         return message.channel.send(new RichEmbed().setTitle("Loteria").addField("Zysk", hajsy).addField("Wygrana", `Wygrałeś/aś ${ilosckasy}` + "$ do Jacob Bota").setFooter(message.author.tag))
      }
      if (hajsy < 0) {
         return message.channel.send(new RichEmbed().setTitle("Loteria").addField("Strata", Math.abs(hajsy)).addField("Wygrana", `Wygrałeś/aś ${ilosckasy}` + "$ do Jacob Bota").setFooter(message.author.tag))
      }
      
  

 db.add(message.author.id + ".kasa", ilosckasy)
 
   }
   if (losowanie === 4) {
    message.channel.send("Przegrałeś/aś!")
          
      }





if (losowanie === 5) {
 return message.channel.send("Przegrałeś/aś!")
}
if (losowanie === 6) {
    const ilosckasy = Math.floor(Math.random() * 100 + 1)  

    const hajsy = ilosckasy - 20;
    if (hajsy > 0) {
       return message.channel.send(new RichEmbed().setTitle("Loteria").addField("Zysk", hajsy).addField("Wygrana", `Wygrałeś/aś ${ilosckasy}` + "$ do Jacob Bota").setFooter(message.author.tag))
    }
    if (hajsy < 0) {
       return message.channel.send(new RichEmbed().setTitle("Loteria").addField("Strata", Math.abs(hajsy)).addField("Wygrana", `Wygrałeś/aś ${ilosckasy}` + "$ do Jacob Bota").setFooter(message.author.tag))
    }
    


db.add(message.author.id + ".kasa", ilosckasy)
      
  
}

}

exports.help = {
    name: 'lottery' 
  }
