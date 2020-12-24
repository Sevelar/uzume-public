const { RichEmbed } = require('discord.js');
const { color, prefix } = require("../../data/config.json")

module.exports = {
run: async (bot, message, args) => {
    
    if (!message.guild) return;
    let user = message.mentions.users.first();

    if (args[0]) {
        if (user) {
            let avatar = new RichEmbed()
            .setTitle(`${user.username}#${user.discriminator}`)
            .setDescription(`Is that your avatar? [URL](${user.displayAvatarURL})`)
            .setColor(color)
            .setImage(user.avatarURL);
             message.channel.send({embed: avatar});
        }
    }
    if (!args[0]) {
        if (!user) {
            let avatar = new RichEmbed()
            .setTitle(`${message.author.username}#${message.author.discriminator}`)
            .setDescription(`Is that your avatar? [URL](${message.author.displayAvatarURL})`)
            .setColor(color)
            .setImage(message.author.displayAvatarURL);
             message.channel.send({embed: avatar});
        }
    }
},

config: {
    name: "avatar",
    aliases: ["av", "a"],
    description: "Displays message author's avatar or mentioned user.",
    usage: `\`${prefix}avatar\`` + ", " + `\`${prefix}avatar <@mention>\``,
    permissions: "Everyone"
}}

//${message.author.username}
//${message.author.discriminator}