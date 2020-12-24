const { RichEmbed } = require('discord.js');
const { color, prefix } = require("../../data/config.json")

module.exports = {
run: async (bot, message, args) => {
    
    if (!message.guild) return;
    let user = message.mentions.users.first();

    if (args[0]) {
        if (user) {
            let uEmbed = new RichEmbed()
            .setColor(color)
            .setAuthor(`${user.username}`, user.displayAvatarURL)
            .setThumbnail(user.displayAvatarURL)
            .addField("Username:", `${user.username}`, false)
            .addField("Discord Tag:", `#${user.discriminator}`, false)
            .addField("ID:", `**${user.id}**`, false)
            .addField("Status", `${user.presence.status.charAt(0).toUpperCase() + user.presence.status.slice(1)}`, false)
            .addField("Created at", `${user.createdAt.toUTCString()}`, false)
            message.channel.send({embed: uEmbed});
        }
    }

    if(!args[0]) {
        if (!user)  {
            let uEmbed = new RichEmbed()
            .setColor(color)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
            .setThumbnail(message.author.displayAvatarURL)
            .addField("Username:", `${message.author.username}`, true)
            .addField("Discord Tag:", `#${message.author.discriminator}`, true)
            .addField("ID:", `**${message.author.id}**`, false)
            .addField("Status", `${message.author.presence.status.charAt(0).toUpperCase() + message.author.presence.status.slice(1)}`, false)
            .addField("Created at", `${message.author.createdAt.toUTCString()}`, false)
            message.channel.send({embed: uEmbed});
        }
    }
},  

config: {
    name: "userinfo",
    aliases: ["ui", "user"],
    usage: `\`${prefix}userinfo\`` + ", " + `\`${prefix}userinfo <@mention>\``,
    description: "Displays information about the user.",
    permissions: "Everyone"
}}