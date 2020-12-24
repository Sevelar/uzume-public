module.exports = (bot) => {
    let prompt = process.openStdin()
    prompt.addListener("data", res => {
        let x = res.toString().trim().split(/ +/g)
            bot.channels.get("449745519657615362").send(x.join(" "));
    });
}