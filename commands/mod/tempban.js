const { prefix } = require("../../data/config.json");
const Ban = require("../../models/ban_model.js");
const mongoose = require('mongoose');
const ms = require("ms");

module.exports = {
run: async (bot, message, args) => {
    
    /*if (!message.guild) return;
    if (!message.member.hasPermission("BAN_MEMBERS") || !message.guild.owner) {
        return message.channel.send("You don't have permissions to use this command.")
    }
    
    let toBan = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (toBan.hasPermission("BAN_MEMBERS")) return message.channel.send("Can't ban them.")
        if (!toBan) return message.channel.send("Couldn't find a user.")
    
    let banTime = args[1];
        if (!banTime) return message.channel.send("You didn't specify the time for ban.");
        if (ms(banTime) > 2147483647) {
            console.log("\x1b[31m%s\x1b[0m", "[WARN] - banTime has reached max value of Int32.");
            return banTime = args[1];
        }
    let reason = args.slice(2).join(" ");  
    
    const banned = message.mentions.users.first();
    const bannedID = banned.id;
    const bannedUsername = toBan.user.username;
    const serverName = message.guild.name;
   
    if (banTime) {
        if (reason) {
            try {
                await banned.send(`Hello. You have been banned on ${serverName} for ${ms(ms(banTime), { long: true })}. The reason is: ${reason}. Have a nice day!`)
            }
            catch(error) {
                console.log("\x1b[33m%s\x1b[0m", "[ERROR] - Couldn't send a message to this user.")
            }
            finally {
                toBan.ban({
                    reason: `${reason}`,
                }).catch(err => {
                    console.error(err);
                })
                message.channel.send(`Successfully banned <@${banned.id}> for ${ms(ms(banTime), { long: true })} and reason: ${reason}.`)
            } 
        }
        else {
            reason = "Unspecified";
            try {
                await banned.send(`Hello. You have been banned on ${serverName} for ${ms(ms(banTime), { long: true })}. The reason is unspecified. Have a nice day!`)
            }
            catch(error) {
                console.log("\x1b[33m%s\x1b[0m", "[ERROR] - Couldn't send a message to this user.")
            }
            finally {
                toBan.ban({
                    reason: ``,
                }).catch(err => {
                    console.error(err);
                })
                message.channel.send(`Successfully banned <@${banned.id}> for ${ms(ms(banTime), { long: true })} with unspecified reason.`)
            }
        }
    }

    /*let BanEmbed = new RichEmbed()
    .setColor(color)
    .setAuthor(`${message.guild.name}`, message.guild.iconURL)
    .setDescription(`**Action:** Ban\n**Suspect ID:** ${bannedID}\n**Moderator:** <@${message.author.id}>`)  
    .setThumbnail(banned.displayAvatarURL)
    .addField("Suspect Name:", `<@${bannedID}>`, false)
    .addField("Suspect Tag:", `${banned.discriminator}`, false)
    .addField("Channel:", message.channel, false)
    .addField("Banned for:", `${ms(ms(bantime))}`)
    .addField("Reason:", `${Reason || "Unspecified"}`)  
    .addField("Date:", `${message.createdAt.toUTCString()}`)    
    let BanChannel = message.guild.channels.find('name', 'action-log') || message.guild.channels.find('name', 'logs')
    if (!BanChannel) return;
    BanChannel.send(BanEmbed);*/

    /*const ban = new Ban({
        _id: mongoose.Types.ObjectId(),
        serverID: message.guild.id,
        serverName: message.guild.name,
        action: "Temporary Ban",
        bannedID: bannedID,
        bannedByID: message.author.id,
        reason: reason || "Unspecified",
        bannedFor: ms(ms(banTime), { long: true }),
        time: message.createdAt.toUTCString(),
        channel: message.channel,
        bannedUsername: bannedUsername,
        bannedBy: message.author.username,
    })

    ban.save()
    .then(result => console.log(result))
    .catch(err => console.log(err));

    setTimeout(function(){
        message.guild.unban(toBan);
    }, ms(banTime));*/
    message.channel.send("Command currently unavailable.");
},

config: {
    name: "tempban",
    description: "Bans a member for a specified time.",
    usage: `\`${prefix}tempban <@user> <1s/m/h/d/y> <reason>\`\n**\`\`\`prolog\nWarning: This command can ban MAX to 24 days.\`\`\`**`,
    permissions: "Moderators",
    aliases: ["tb", "tempbanish"]
}}

