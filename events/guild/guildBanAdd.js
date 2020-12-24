const { RichEmbed } = require('discord.js')
const { color } = require("../../data/config.json");
const Ban = require("../../models/ban_model.js");

module.exports = async (bot, guild, user) => {	

	Ban.findOneAndUpdate({
		serverID: guild.id,
	}, { serverName: guild.name }, { sort: { 'time' : -1 } }, (err, ban) => {
		if (err) console.log(err);
		if (ban) {
			if (ban.action == "Ban") {
				let embed = new RichEmbed()
				.setColor(color)
				.setAuthor(`${guild.name}`, guild.iconURL)
				.setDescription(`**Action:** Ban\n**Suspect ID:** ${user.id}\n**Moderator:** <@${ban.bannedByID}>`)  
				.setThumbnail(user.displayAvatarURL)
				.addField("Suspect Name:", `<@${user.id}>`, false)
				.addField("Suspect Tag:", `${user.discriminator}`, false)
				.addField("Channel:", ban.channel, false)
				.addField("Reason:", `${ban.reason || "Unspecified"}`)  
				.addField("Date:", `${ban.time}`)    
				
				let logs = guild.channels.find('name', 'action-log') || guild.channels.find('name', 'logs')
					if (!logs) return;
				logs.send(embed);
			}
			else if (ban.action == "Temporary Ban") {
				let embed = new RichEmbed()
				.setColor(color)
				.setAuthor(`${guild.name}`, guild.iconURL)
				.setDescription(`**Action:** Temp-Ban\n**Suspect ID:** ${user.id}\n**Moderator:** <@${ban.bannedByID}>`)  
				.setThumbnail(user.displayAvatarURL)
				.addField("Suspect Name:", `<@${user.id}>`, false)
				.addField("Suspect Tag:", `${user.discriminator}`, false)
				.addField("Channel:", ban.channel, false)
				.addField("Banned for:", `${ban.bannedFor}`)
				.addField("Reason:", `${ban.reason || "Unspecified"}`)  
				.addField("Date:", `${ban.time}`)    
				
				let logs = guild.channels.find('name', 'action-log') || guild.channels.find('name', 'logs')
					if (!logs) return;
				logs.send(embed);
			}
		}
	})
}



/*	bot.on("guildBanAdd", (banguild, banuser) => {
		var embed = {
			"description": `<@${banuser.id}> - *${banuser.id}*`,
			"url": banuser.displayAvatarURL,
			"color": 16711901,
			"timestamp": new Date(),
			"footer": {
				"text": `${banuser.username}`
			},
			"thumbnail": {
				"url": banuser.displayAvatarURL,
			},
			"author": {
				"name": `USER BANNED : ${banuser.tag}`,
				"icon_url": "https://cdn.discordapp.com/emojis/435119375138422811.png"
			}
		};
		send(bot, banguild, options, embed, "guildBanAdd")
	});*/