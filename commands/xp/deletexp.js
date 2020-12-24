const { prefix, owner } = require("../../data/config.json")
const XP = require("../../models/xp_model.js")

module.exports = {
run: async (bot, message, args) => {
    if (!owner.includes(message.author.id)) return message.channel.send("You are not the owner of the bot!")
    let Delete = args[0];
    if (!Delete) return message.channel.send("You didn't specify the ID of user to delete!")
    XP.findOneAndDelete({
        userID: Delete,
        serverName: message.guild.name,
        serverID: message.guild.id
    }, (err) => {
        if (err) return console.log(err);
        else {
            message.channel.send("Successfully deleted a XP page from the database.")
        }
    })
},

config: {
    name: "deletexp",
    aliases: ["delxp"],
    description: "Deletes a XP page of a user.",
    usage: `\`${prefix}delxp <userid>\``,
    permissions: "Bot Owner"
}}