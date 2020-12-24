const mongoose = require('mongoose');
const Ban = require("../../models/ban_model.js");
const { prefix } = require("../../data/config.json");

module.exports = {
run: async (bot, message, args) => {
          
    if (!message.guild) return;
    if (!message.member.hasPermission("BAN_MEMBERS") || !message.guild.owner) {
        message.channel.send("You don't have permissions to use this command.").then(message => {
            message.delete(5000);
        });
    }
    
    let bannedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (bannedUser.hasPermission("BAN_MEMBERS")) {
            message.channel.send("This person can't be banned.").then(message => {
                message.delete(5000);
            });
        }
        if (!bannedUser) {
            message.channel.send("Couldn't find a user.").then(message => {
                message.delete(5000);
            });
        }
    let reason = args.slice(1).join(" "); 
   
    const ban = new Ban({
        _id: mongoose.Types.ObjectId(),
        serverID: message.guild.id,
        serverName: message.guild.name,
        action: "Ban",
        bannedID: bannedID,
        reason: reason || "Unspecified",
        bannedByID: message.author.id,
        time: message.createdAt.toUTCString(),
        channel: message.channel,
        bannedUsername: bannedUsername,
        bannedBy: message.author.name
    });

    ban.save()
    .then(result => console.log(result))
    .catch(err => console.log(err));

    if (reason) {
        bannedUser.ban({
            reason: `${reason}`
        }).catch(err => {
            console.error(err);
        });
    }
    
    else {
        bannedUser.ban().catch(err => {
            console.error(err);
        });
    }
},

config: {
    name: "ban",
    description: "Permanently bans a member.",
    usage: `\`${prefix}ban <@user> <reason>\``,
    permissions: "Moderators",
    aliases: ["b", "banish"]
}}


