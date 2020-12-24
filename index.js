const { Client, Collection } = require('discord.js');
const { token } = require('./data/config.json');
const bot = new Client();

bot.mongoose = require('./database.js');

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./core/${x}`)(bot));

bot.mongoose.init();
bot.login(token);

//const Snoowrap = require('snoowrap')
//const Snoostorm = require('snoostorm')
//const { userAgent } = require("./data/reddit.json")
//const { RichEmbed } = require('discord.js')

/*const r = new Snoowrap({
    userAgent: userAgent,
    accessToken: "8WgMseT5_uO7Q80yVcAXq3hbekY"
});
const streamOptions = {
    subreddit: 'gamindustri',
    limit: 10, 
    pollTime: 2000
}
const submissions = new Snoostorm.SubmissionStream(r, streamOptions)
submissions.on('submission', (submission) => {
    embed = new RichEmbed()
    embed.setAuthor(submission.title, r.getSubreddit('gamindustri').icon_img, submission.url)
    if (submission.includes(submission.body)) return embed.setDescription(submission.body);
    embed.setThumbnail(submission.thumbnail)
    embed.setFooter(`Reddit•Posted by ${submission.author_fullname}`, "<:reddit:573165099746066433>")
    embed.setTimestamp()
    embed.setColor(0x4295f4)
    let feedchannel = message.guild.channels.find(`name`, "feed")
    if (!feedchannel) return;
    feedchannel.send(embed);
    //<:reddit:573165099746066433>
})*/