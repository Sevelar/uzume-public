const { prefix } = require("../../data/config.json")

module.exports = {
run: async (bot, message, args) => {        
    
    if (!message.guild) return;
    if (!message.member.hasPermission("KICK_MEMBERS") || !message.guild.owner) {
        return message.channel.send("You don't have permissions to use this command.").then(message => {
            message.delete(5000);
        });
    }

    let kickedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (kickedUser.hasPermission("KICK_MEMBERS")) {
        return message.channel.send("This person can't be kicked.").then(message => {
            message.delete(5000);
        });
    }
    if (!kickedUser) { 
        return message.channel.send("Couldn't find a user.").then(message => {
            message.delete(5000);
        });
    }
    let reason = args.slice(1).join(" ");  

    if (!reason) {
        kickedUser.kick().then(() => 
        message.channel.send(`Successfully kicked ${kickedUser.user.username}.`))
        .catch(console.error);
    }

    if (reason) {
        kickedUser.kick(reason).then(() => 
        message.channel.send(`Successfully kicked ${kickedUser.user.username} for a reason: ${reason}.`))
        .catch(console.error);
    }
},

config: {
    name: "kick",
    description: "Kicks a member from the server.",
    usage: `\`${prefix}kick <@user> <reason>\``,
    permissions: "Moderators",
    aliases: []
}}