if (message.channel.id === "548167991121149964") {
    message.delete()

    if (message.author.createdAt > new Date(new Date().setDate(new Date().getDate()-7))) {
        const embed = new RichEmbed().setTitle(message.author.tag + " ma konto które ma mniej niż 7 dni!")
        const w = await message.channel.send(embed)
        setTimeout(function(){
            w.delete()
           
           
            }, 20000)
            message.author.send(embed)
            return;
    }
}