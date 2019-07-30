const snekfetch = require('snekfetch');

module.exports.run = (client, message, args, tools) => {
let [title, contents] = args.join(" ").split("|");
  if(!contents) {
    [title, contents] = ["Zdobyto osiagniecie!", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("pal")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("ciastko")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("ciasto")) rnd = 10;

  if(contents.length > 22) return message.edit("22 litery i cyfry max.").then(message.delete.bind(message), 2000);
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>message.channel.send("", {files:[{attachment: r.body}]}));
  message.delete();
  }
module.exports.help = {
  name: "achievement",
category: "Image",
   description: `
Osiąginęcie z klocków
{prefix}achievement <treść>
    `,
    aliases: [],
    permLevel:"Użytkownik"
}
