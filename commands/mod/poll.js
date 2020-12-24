const Discord = require('discord.js');
const { prefix } = require("../../data/config.json")

module.exports = {
run: async (bot, message, args, ops) => {

	/*if (!message.member.roles.find("name", "@everyone")) { 
		message.channel.send('Invalid permissions.');
		return;
	}
    if (!args[0]) return message.channel.send('Proper usage: `poll <question>');
    const embed = new Discord.RichEmbed()
        .setColor("#ffffff")
        .setFooter('React to Vote.')
        .setDescription(args.join(' '))
        .setTitle(`Poll Created By ${message.author.username}`);
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅"); 
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });*/
    message.channel.send("Command currently under maintenance.")
},
config: {
    name: "poll",
    description: "Creates a poll!",
    usage: `\`${prefix}poll <question>\``,
    permissions: "Everyone",
    aliases: ["p", "vote"]
}}