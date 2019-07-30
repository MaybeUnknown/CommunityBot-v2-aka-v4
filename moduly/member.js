module.exports = async (client) => {
    const db = require('quick.db');

    client.on("guildMemberAdd", user => {
    let rola = user.guild.roles.find(role => role.name === db.fetch(user.guild.id + ".role") ); //Definiowanie roli
    if(rola) {
        user.addRole(rola); //Dodawanie roli
    }
    if(db.fetch(user.guild.id + ".wiadon") === 'true') { //Jeśli wysyłanie wiadomości na powitanie jest włączone
        let powChannel = user.guild.channels.find("name", db.fetch(user.guild.id + ".powKanal") || null); 
        if(!powChannel) return;
        const tekst = db.fetch(user.guild.id + ".powTekst").replace("{user}", `<@${user.user.id}>`); //Zamienianie {user} na użytkownika
        powChannel.send(tekst);
    }
    if(db.fetch(user.guild.id + ".embon") === 'true' && db.fetch(user.guild.id + ".embTekst")) { //Jeśli Wysyłanie embedu na powitanie jest włączone
        let powChannel = user.guild.channels.find("name", db.fetch(user.guild.id + ".powKanal") || null);
        if(!powChannel) return;
        let kolor = "";
        if(db.fetch(user.guild.id + ".kolor") === "Czerwony") kolor = "#DC143C";
        if(db.fetch(user.guild.id + ".kolor") === "Cyan") kolor = "#00FFFF";
        if(db.fetch(user.guild.id + ".kolor") === "Jasny zielony") kolor = "#7FFF00";
        const embed = new RichEmbed();
    if(db.fetch(user.guild.id + ".embNag") !== "null" &&  db.fetch(user.guild.id + ".embNag")) { //Nagłowek embedu
        embed.setTitle(db.fetch(user.guild.id + ".embNag").replace("{user}", `${user.user.tag}`));
    }
    if(db.fetch(user.guild.id + ".embFoot") !== "null" &&  db.fetch(user.guild.id + ".embFoot")) { //Footer embedu
        embed.setFooter(db.fetch(user.guild.id + ".embFoot").replace("{user}", `${user.user.tag}`));
    }
    embed.setDescription(db.fetch(user.guild.id + ".embTekst").replace("{user}", `<@${user.user.id}>`)); //Ustawianie opisu
    embed.setColor(kolor || "#F0F8FF") //Ustawianie koloru
    powChannel.send(embed);
    }
    if(db.fetch(user.guild.id + ".pwon") === 'true' && db.fetch(user.guild.id + ".pwTekst")) { //Wysyłanie na PW do użytkownika
        client.users.get(user.id).send(db.fetch(user.guild.id + ".pwTekst").replace("{user}", `<@${user.user.id}>`))
    }
    });
    client.on("guildMemberRemove", user => {
        let byeChannel = user.guild.channels.find("name", db.fetch(user.guild.id + ".byeKanal") || null); //Definiowanie kanału
        if(!byeChannel) return;
        let tekst = db.fetch(user.guild.id + ".byeTekst")
        if(tekst && tekst !== 'null') tekst = tekst.replace("{user}", `<@${user.user.id}>`); //Zastępowanie {user} użytkownikiem
        byeChannel.send(tekst);
        });
};
