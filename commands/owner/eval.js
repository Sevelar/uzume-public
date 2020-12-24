const { owner, prefix } = require("../../data/config.json");
const { inspect } = require("util")

module.exports ={
    run: async (bot, message, args) => {
        if (owner.includes(message.author.id)) {
            try{
                let toEval = args.join(" ")
                let evaluated = inspect(eval(toEval, { depth: 0}));
                if (!toEval) {
                    return message.channel.send(`Error while evaluating: \`air\``);
                }
                else {
                    let hrStart = process.hrtime()
                    let hrDiff;
                    hrDiff = process.hrtime(hrStart);
                    return message.channel.send(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000000}ms.*\n\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
                }
            }
            catch (e) {
                return message.channel.send(`Error while evaluating: \`${e.message}\``);
            } 
        }
        else {
            return message.channel.send("You are not the bot owner.").then(msg => msg.delete(5000))
        }
    },
    config: {
        name: "eval",
        description: "Evaluates the code.",
        permissions: "Bot Owner",
        usage: `\`${prefix}eval <input>\``
    }
}