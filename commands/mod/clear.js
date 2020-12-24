const { RichEmbed } = require('discord.js');
const { color, prefix } = require('../../data/config.json')

module.exports = {
run: async (bot, message, args) => {
    
    if (!message.guild) return;
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't use this command.");
    
    if (!args[0]) return message.channel.send("You didn't specify how many messages should be deleted.");
    if (!Array || !Number) return;

    message.delete().then(() => {
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`Successfully cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
        })
    })
    
    embed = new RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`Detected bulk delete in ${message.channel}, ${args[0]} messages got deleted.\n\nOperation occured by: <@${message.author.id}>`)
        .setTimestamp()
        .setColor(color);
    let logs = message.guild.channels.find('name', 'action-log') || message.guild.channels.find('name', 'logs');
        if (!logs) return;
    logs.send(embed);
},

config: {
    name: "clear",
    aliases: ["purge", "cl"],
    description: "Clears messages.",
    usage: `\`${prefix}clear <amount>\``,
    permissions: "Moderators"
}}