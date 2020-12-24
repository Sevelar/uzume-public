const { RichEmbed } = require('discord.js');
const { color, prefix } = require("../../data/config.json")
const XP = require("../../models/xp_model.js");

module.exports = {
run: async (bot, message, args) => {
    
    let user = message.mentions.users.first();
    if (!user) {
        XP.findOneAndUpdate({
            serverID: message.guild.id,
            serverName: message.guild.name,
            userID: message.author.id,
        }, { userName: message.author.username }, (err, xp) => {
            if (err) console.log(err);
            if (!xp) return message.reply("Please use one of the XP commands to create your profile!")
            if (xp) {
                embed = new RichEmbed()
                .setThumbnail(message.author.displayAvatarURL)
                .setAuthor(`${message.author.username}'s XP Page`, bot.user.displayAvatarURL)
                .setTimestamp()
                .setColor(color)
                .addField("Username:", message.author.username)
                .addField("Current XP:", xp.xp)
                .addField("Current Level:", xp.level)
                .addField("XP for next level:", xp.toNextLVL - xp.xp)
                message.channel.send(embed)
            }
        })
    }
    if (user) {
        XP.findOneAndUpdate({
            serverID: message.guild.id,
            serverName: message.guild.name,
            userID: user.id,
        }, { userName: user.username }, (err, xp) => {
            if (err) console.log(err);
            if (!xp) return message.reply("Please use one of the XP commands to create your profile!")
            if (xp) {
                embed = new RichEmbed()
                .setThumbnail(user.displayAvatarURL)
                .setAuthor(`${user.username}'s XP Page`, bot.user.displayAvatarURL)
                .setTimestamp()
                .setColor(color)
                .addField("Username:", user.username)
                .addField("Current XP:", xp.xp)
                .addField("Current Level:", xp.level)
                .addField("XP for next level:", xp.toNextLVL - xp.xp)
                message.channel.send(embed)
            }
        }) 
    }
},

config: {
    name: "level",
    aliases: ["lvl"],
    description: "Check your XP and current level!",
    usage: `\`${prefix}level\``,
    permissions: "Everyone"
}}