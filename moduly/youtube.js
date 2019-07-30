const db = require("quick.db");
const YouTubeWatch = require('youtube-watch');

module.exports = async (client) => {
client.on("ready", () => {
const yw = new YouTubeWatch({
    secretKey: 'sgdsfk;jdsfljfdsjseurioefjdsfdjsfdsl;jf',
    hubCallback: 'http://rkubapl.malopolska.pl/',
    hubPort: 9999,
});
 
yw.on('start', () => {
let channels = [];
client.guilds.forEach(g => { 
function loadChannels() {
    yw.unwatch(channels);
    channels = []
    if(db.fetch(gu.id + ".idYt") !== null && db.fetch(gu.id + ".ytCh") !== null && db.fetch(gu.id + ".idTr") !== null) {
        channels.push(db.fetch(gu.id + ".idYt"));
    }
    yw.watch(channels);  
}
loadChannels();
setTimeout(funciton() { 
loadChannels(); 
}, 300000);

});

});
 
yw.on('notified', video => {
client.channels.get(db.fetch(video.channelId + ".id")).send(db.fetch(g.id + ".idTr").replace("{}", video.title).replace("<>", vide.author));
});
 
yw.start();
});
};
