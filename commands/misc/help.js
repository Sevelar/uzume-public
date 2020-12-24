const { RichEmbed } = require("discord.js")
const { prefix, color, botname } = require("../../data/config.json");

module.exports = {
run: async (bot, message, args) => {
    let arr = [];
    let types = ["1"];
    let embed = new RichEmbed();

    if (!args[0]) {
        for (let i = 0; i < types.length; i++) {
            arr.push(bot.commands.map(c => `\`${c.config.name}\``).join(" "));
            try {
                embed.addField(types[i], arr[i]);
            }
            catch (e) {
                embed.addBlankField();
            }
        }
        embed.setColor(color)
            .setAuthor(`${botname}`, bot.user.displayAvatarURL)
            .setThumbnail(bot.user.displayAvatarURL)
            .setTimestamp()
            .setDescription(`These are the available commands for ${botname}.\nThe bot prefix is: \`${prefix}\``)
            .addField(`Commands: `, arr)
            .addField(`Help for commands`, `More info about specific command you can see by using: \`${prefix}help {command}\``);
        message.channel.send(embed);
    }

    else {
        let command = bot.commands.get(args[0]) ?  bot.commands.get(args[0].toLowerCase()).config : bot.commands.get(bot.aliases.get(args[0].toLowerCase())).config;
        embed.setColor(color)
            .setAuthor(`${botname}`, bot.user.displayAvatarURL)
            .setThumbnail(bot.user.displayAvatarURL)
            .setDescription(`The bot prefix is: \`${prefix}\`\n\n**Command:** \`${command.name}\`\n**Description:** ${command.description || "No Description"}\n**Usage:** ${command.usage || "No Usage"}\n**Permissions:** ${command.permissions || "Undefined"}\n**Aliases:** ${command.aliases ? command.aliases.join(", ") : "None"}`);
        message.channel.send(embed);
    }
},

config: {
    name: "help",
    aliases: ["h", "commands"],
    usage: `\`${prefix}help\``,
    description: "Displays help information.",
    permissions: "Everyone"
}}