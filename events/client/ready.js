
module.exports = async bot => {
    console.log(`${bot.user.username} is ready to work.`)
    bot.user.setPresence({ game: { name: 'Megadimension.', type: 3 } });
}