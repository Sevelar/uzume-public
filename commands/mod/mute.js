const { prefix } = require("../../data/config.json")
const ms = require("ms");

module.exports = {
run: async (bot, message, args) => {
    
    if (!message.guild) return;
    if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.guild.owner) {
        return message.channel.send("You don't have permissions to use this command.")
    }
    
    let toMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (toMute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Can't mute them.");
        if (!toMute) return message.channel.send("Couldn't find a user.");
    
    let muteTime = args[1];
        if (!muteTime) return message.channel.send("You didn't specify the time of mute.");
        if (ms(muteTime) > 2147483647) {
            console.log("\x1b[31m%s\x1b[0m", "[WARN] - muteTime has reached max value of Int32.");
            return muteTime = args[1];
        }
    
    let muteRole = message.guild.roles.find("name", "Muted");

    if (!muteRole) {
        try {
            muteRole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            });
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muteRole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        }
        catch(e) {
            console.log(e.stack);
        }
    }

    await(toMute.addRole(muteRole.id));
    message.channel.send(`<@${toMute.id}> has been muted for ${ms(ms(muteTime))}`);

    setTimeout(function(){
        toMute.removeRole(muteRole.id);
    }, ms(muteTime));
},

config: {
    name: "mute",
    aliases: ["m", "mute"],
    usage: `\`${prefix}mute <@mention> <1s/m/h/d>\`\n**\`\`\`prolog\nWarning: This command can mute MAX to 24 days.\`\`\`**`,
    description: "Mutes a person for specified time.",
    permissions: "Moderator"
}}