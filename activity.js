class DJSActivity {
    constructor(bot, list = ["działa"], time = 10000, type = "PLAYING") {
      setInterval(() => {
        bot.user.setActivity(list[Math.floor(Math.random()*list.length)], { type: type });
      },time);
    }
  }
  
  module.exports = DJSActivity;