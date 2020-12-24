const mongoose = require("mongoose");
const { RichEmbed } = require('discord.js');
const Warn = require("../../models/warn_model.js");
const { color, prefix } = require("../../data/config.json")

module.exports = {
run: async (bot, message, args) => {
    
    if(!message.guild) return;
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("You don't have permissions to use this command.").then(message => {
            message.delete(5000);
        });
    }
    
    let warnedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!warnedUser) {
        return message.channel.send("Couldn't found a user.").then(message => {
            message.delete(5000);
        });
    }
    if (warnedUser.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("This person can't be warned.").then(message => {
            message.delete(5000);
        });
    }
    
    let reason = args.slice(1).join(" ");
    if (!reason) {
        return message.channel.send("You must provide a reason to warn a user!").then(message => {
            message.delete(5000)
        });
    }

    let embed = new RichEmbed()
    .setColor(color)
    .setAuthor(`${message.guild.name}`, message.guild.iconURL)
    .setDescription(`**Action:** Warning\n**Suspect ID:** ${warnedUser.id}\n**Moderator:** <@${message.author.id}>`)  
    .setThumbnail(warnedUser.user.displayAvatarURL)
    .addField("Suspect Name:", `<@${warnedUser.id}>`, false)
    .addField("Suspect Tag:", `${warnedUser.user.discriminator}`, false)
    .addField("Date:", `${message.createdAt.toUTCString()}`)
    .addField("Channel:", message.channel, false)
    .addField("Reason:", `${reason}`)

    Warn.findOneAndUpdate({
        serverID: message.guild.id
    }, { serverName: message.guild.name }, { sort: { 'time' : -1, 'userID' : -1 } }, (err,warn) => {
        if (err) console.log(err);
        if (warn) {           
            const warn = new Warn({
                _id: mongoose.Types.ObjectId(),
                serverName: message.guild.name,
                username: warnedUser.user.username,
                userID: warnedUser.id,
                reason: reason,
                reportedBy: message.author.username,
                reportedByID: message.author.id,
                time: message.createdAt.toUTCString(),
                warnCount: warn.warnCount++
            });
            warn.save().then(result => console.log(result)).catch(err => console.log(err));    
            embed.addField("Warnings Count:", `Suspect has been warned at least ${warn.warnCount} times.`);
        
            let logs = message.guild.channels.find('name', 'action-log') || message.guild.channels.find('name', 'logs');
                if (!logs) return;
            logs.send(embed);
            message.channel.send(`Successfully warned <@${warnedUser.user.id}> for: ${reason}. Check logs channel for more information.`);
        }
        else if (!warn) {
            const warn = new Warn({
                _id: mongoose.Types.ObjectId(),
                serverName: message.guild.name,
                username: warnedUser.user.username,
                userID: warnedUser.id,
                reason: reason,
                reportedBy: message.author.username,
                reportedByID: message.author.id,
                time: message.createdAt.toUTCString(),
                warnCount: 1
            });
            warn.save().then(result => console.log(result)).catch(err => console.log(err));  
            embed.addField("Warnings Count:", `Suspect has been warned at least ${warn.warnCount} times.`);
        
            let logs = message.guild.channels.find('name', 'action-log') || message.guild.channels.find('name', 'logs');
                if (!logs) return;
            logs.send(embed);
            message.channel.send(`Successfully warned <@${warnedUser.user.id}> for: ${reason}. Check logs channel for more information.`);
        }
    });
},

config: {
    name: "warn",
    description: "Gives a warning a user with a reason.",
    usage: `\`${prefix}!warn <@user> <reason>\``,
    permissions: "Moderators",
    aliases: ["warning"]
}}