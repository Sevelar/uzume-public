const { RichEmbed } = require("discord.js")
const { prefix, color } = require("../../data/config.json")

module.exports = {
run: async (bot, message, args) => {
    
    if (!message.guild) return;
    var verificationVar = message.guild.verificationLevel;
        if (verificationVar == 0) {
            var verificationVar = "Unrestricted"
        }
        else if (verificationVar == 1) {
            var verificationVar = "Low (Must have verified email on account)"
        }
        else if (verificationVar == 2) {
            var verificationVar = "Medium (Must be registered on Discord for longer than 5 minutes)"
        }
        else if (verificationVar == 3) {
            var verificationVar = "High (Must be a member of the server for longer than 10 minutes)"
        }
        else if (verificationVar == 4) {
            var verificationVar = "Very High (Must have a verified phone number)"
        }

    let sEmbed = new RichEmbed()
        .setColor(color)
        .setAuthor(`${message.guild.name}`, message.guild.iconURL)
        .setThumbnail(message.guild.iconURL)
        .setDescription(`**ID:** ${message.guild.id}`)
        .addField("Server Name:", `${message.guild.name}`, false)
        .addField("Verification Level:", `${verificationVar}`, false)
        .addField("Server Owner:", `${message.guild.owner}`, false)
        .addField("Region:", `${message.guild.region}`, true)
        .addField("Member Count:", `${message.guild.memberCount} members`, true)
        .addField("Channel Count:", `${message.guild.channels.size} channels`, true)
        .addField("Role Count:", `${message.guild.roles.size} roles`, true)
        .addField("Created On:", `${message.guild.createdAt.toUTCString()}`, false)
    message.channel.send({embed: sEmbed});
},

config: {
    name: "serverinfo",
    aliases: ["si", "serverdesc"],
    usage: `\`${prefix}serverinfo\``,
    description: "Displays information about the server.",
    permissions: "Everyone"
}}