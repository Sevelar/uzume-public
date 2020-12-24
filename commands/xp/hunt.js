const ms = require('ms');
const { RichEmbed } = require('discord.js');
const { color, prefix, owner } = require("../../data/config.json")
const XP = require("../../models/xp_model.js");
var recently = new Set();
var recentServer = new Set();

module.exports = {
run: async (bot, message, args) => {

    if (recently.has(owner) && recentServer.has(message.guild.id)) {
        recently.delete(owner) 
        recentServer.delete(message.guild.id);
    }

    if (recently.has(message.author.id) && recentServer.has(message.guild.id)) {
        return message.react('🕐').then(() => message.reply(`You can't use this command yet! Please wait 3 minutes.`));
    }

    let randomEvent = ["Normal", "Special"];
    let event = randomEvent[Math.floor(Math.random()* randomEvent.length)];

    embed = new RichEmbed()
    if (event == "Normal") {
        let randomEvent = ["Dogoo", "Elder Dragon", "Fenrir", "Pixelvader", "Whale", "Giant Turle", "Cardbird", "Boxer Cat", "Kupokitty", "Tuna", "Horsebird"]
        let event = randomEvent[Math.floor(Math.random() * randomEvent.length)]
        let randomGif = ["./assets/GIFs/Hunt.gif", "./assets/GIFs/Hunt2.gif"]
        let Gif = randomGif[Math.floor(Math.random() * randomGif.length)]
        
        if (Gif == "./assets/GIFs/Hunt.gif") {
            embed.attachFile(Gif);
            embed.setImage("attachment://Hunt.gif")
        }
        else if (Gif == "./assets/GIFs/Hunt2.gif") {
            embed.attachFile(Gif);
            embed.setImage("attachment://Hunt2.gif")
        }
        else {
            embed.attachFile("./assets/GIFs/Hunt.gif")
            embed.setImage("attachment://Hunt.gif")
        }
        
        if (event == "Dogoo") {
            var xpToAdd = Math.ceil(Math.random() * 25);
            embed.addField(`TIME TO STRIKE!`, `**${message.author.username}** has hunted a **${event}**!\nBeware of Dogoos!\nMax possible XP to gain by killing this mob is: **25**`)
        }
        else if (event == "Elder Dragon") {
            var xpToAdd = Math.ceil(Math.random() * 250);
            embed.addField(`TIME TO STRIKE!`, `**${message.author.username}** has hunted a **${event}**!\nThat dragon was surely the one of the hardest mobs!\nMax possible XP to gain by killing this mob is: **250**`)
        }
        else if (event == "Fenrir") {
            var xpToAdd = Math.ceil(Math.random() * 250);
            embed.addField(`TIME TO STRIKE!`, `**${message.author.username}** has hunted a **${event}**!\nBig wolfs should know where are their place!\nMax possible XP to gain by killing this mob is: **250**`)
        }
        else if (event == "Pixelvader") {
            var xpToAdd = Math.ceil(Math.random() * 25);
            embed.addField(`TIME TO STRIKE!`, `**${message.author.username}** has hunted a **${event}**!\nIt surely reminds me of 8-bit times!\nMax possible XP to gain by killing this mob is: **25**`)
        }
        else if (event == "Cardbird") {
            var xpToAdd = Math.ceil(Math.random() * 25);
            embed.addField(`TIME TO STRIKE!`, `**${message.author.username}** has hunted a **${event}**!\nWhere is that damn bird...\nMax possible XP to gain by killing this mob is: **25**`)
        }
        else if (event == "Boxer Cat") {
            var xpToAdd = Math.ceil(Math.random() * 25);
            embed.addField(`TIME TO STRIKE!`, `**${message.author.username}** has hunted a **${event}**!\nThis cat has balls!\nMax possible XP to gain by killing this mob is: **25**`)
        }
        else if (event == "Kupokitty") {
            var xpToAdd = Math.ceil(Math.random() * 25);
            embed.addField(`TIME TO STRIKE!`, `**${message.author.username}** has hunted a **${event}**!\nThis cat has balls!\nMax possible XP to gain by killing this mob is: **25**`)
        }
        else if (event == "Giant Turtle") {
            var xpToAdd = Math.ceil(Math.random() * 150);
            embed.addField(`TIME TO STRIKE!`, `**${message.author.username}** has hunted a **${event}**!\nI-It's defence is over 9000!\nMax possible XP to gain by killing this mob is: **150**`)
        }
        else if (event == "Whale") {
            var xpToAdd = Math.ceil(Math.random() * 200);
            embed.addField(`TIME TO STRIKE!`, `**${message.author.username}** has hunted a **${event}**!\nFlying whales? That's crazy!\nMax possible XP to gain by killing this mob is: **200**`)
        }
        else {
            var xpToAdd = Math.ceil(Math.random() * 25);
            embed.addField(`TIME TO STRIKE!`, `**${message.author.username}** has hunted a **Dogoo**!\nBeware of Dogoos!\nMax possible XP to gain by killing this mob is: **25**`)
        }
    }
    else if (event == "Special") {
        let randomEvent = ["CPU", "Dark CPU", "Arfoire"]
        let event = randomEvent[Math.floor(Math.random() * randomEvent.length)]
        
        if (event == "CPU") {
            var xpToAdd = Math.ceil(Math.random() * 500);
            let randomCPU = [1, 2, 3, 4, 5, 6]
            let CPU = randomCPU[Math.floor(Math.random()*randomCPU.length)]
            if (CPU == 1) {
                embed.addField(`TIME TO STRIKE!`, `Y-You fought against **a CPU?!**\n**Purple Heart** accepts the challenge!\nMax possible XP to gain is: **500!**`)
                embed.attachFiles(["./assets/GIFs/Purple_Heart.gif"])
                embed.setImage("attachment://Purple_Heart.gif")
            }
            else if (CPU == 2) {
                embed.addField(`TIME TO STRIKE!`, `Y-You fought against **a CPU?!**\n**Black Heart** says that was a good fight!\nMax possible XP to gain is: **500!**`)
                embed.attachFiles(["./assets/GIFs/Black_Heart.gif"])
                embed.setImage("attachment://Black_Heart.gif")
            }
            else if (CPU == 3) {
                embed.addField(`TIME TO STRIKE!`, `Y-You fought against **a CPU?!**\n**Green Heart** takes this battle seriously!\nMax possible XP to gain is: **500!**`)
                embed.attachFiles(["./assets/GIFs/Green_Heart.gif"])
                embed.setImage("attachment://Green_Heart.gif")
            }
            else if (CPU == 4) {
                embed.addField(`TIME TO STRIKE!`, `Y-You fought against **a CPU?!**\nOuch... I hope you're still alive after **that**.\nMax possible XP to gain is: **500!**`)
                embed.setImage("https://i.imgur.com/Bk0nSTp.gif")
            }
            else if (CPU == 5) {
                embed.addField(`TIME TO STRIKE!`, `Y-You fought against **a CPU?!**\nGood luck.\nMax possible XP to gain is: **500!**`)
                embed.attachFiles(["./assets/GIFs/Iris_Heart.gif"])
                embed.setImage("attachment://Iris_Heart.gif")
            }
            else if (CPU == 6) {
                embed.addField(`TIME TO STRIKE!`, `Y-You fought against **a CPU?!**\n**Rei wants your death**.\nMax possible XP to gain is: **500!**`)
                embed.attachFiles(["./assets/GIFs/Rei.jpg"])
                embed.setImage("attachment://Rei.jpg")
            }
            else {
                embed.addField(`TIME TO STRIKE!`, `Y-You fought against **a CPU?!**\n**Purple Heart** accepts the challenge!\nMax possible XP to gain is: **500!**`)
                embed.attachFiles(["./assets/GIFs/Purple_Heart.gif"])
                embed.setImage("attachment://Purple_Heart.gif")  
            }
        }
        else if (event == "Dark CPU") {
            var xpToAdd = Math.ceil(Math.random() * 500);
            let randomDarkCPU = ["Dark Purple", "Dark Black", "Dark Green", "Dark White"];
            let DarkCPU = randomDarkCPU[Math.floor(Math.random() * randomDarkCPU.length)]
            if (DarkCPU == "Dark Purple") {
                embed.addField(`TIME TO STRIKE!`, `**${message.author.username}** has fought against a **Dark Purple**!\nMax possible XP to gain by killing this mob is: **500**`)
                embed.attachFiles(["./assets/GIFs/Dark_Purple.png"])
                embed.setImage('attachment://Dark_Purple.png')
            }
            else if (DarkCPU == "Dark Black") {
                embed.addField(`TIME TO STRIKE!`, `**${message.author.username}** has fought against a **Dark Black**!\nMax possible XP to gain by killing this mob is: **500**`)
                embed.attachFiles(["./assets/GIFs/Dark_Black.png"])
                embed.setImage('attachment://Dark_Black.png')
            }
            else if (DarkCPU == "Dark Green") {
                embed.addField(`TIME TO STRIKE!`, `**${message.author.username}** has fought against a **Dark Green**!\nMax possible XP to gain by killing this mob is: **500**`)
                embed.attachFiles(["./assets/GIFs/Dark_Green.png"])
                embed.setImage('attachment://Dark_Green.png')
            }
            else if (DarkCPU == "Dark White") {
                embed.addField(`TIME TO STRIKE!`, `**${message.author.username}** has fought against a **Dark White**!\nMax possible XP to gain by killing this mob is: **500**`)
                embed.attachFiles(["./assets/GIFs/Dark_White.png"])
                embed.setImage('attachment://Dark_White.png')
            }
            else {
                embed.addField(`TIME TO STRIKE!`, `**${message.author.username}** has fought against a **Dark Purple**!\nMax possible XP to gain by killing this mob is: **500**`)
                embed.attachFiles(["./assets/GIFs/Dark_Purple.png"])
                embed.setImage('attachment://Dark_Purple.png')
            }
        }
        else if (event == "Arfoire") {
            var xpToAdd = Math.ceil(Math.random() * 500);
            embed.addField(`TIME TO STRIKE!`, `Y-You fought against Afroire?!\nYou gave this old baba a good lesson to not mess with CPUs!\nMax possible XP to gain is: **500!**`)
            embed.attachFiles(["./assets/GIFs/Arfoire.gif"])
            embed.setImage("attachment://Arfoire.gif")
        }
        else {
            var xpToAdd = Math.ceil(Math.random() * 500);
            embed.addField(`TIME TO STRIKE!`, `Y-You fought against Afroire?!\nYou gave this old baba a good lesson to not mess with CPUs!\nMax possible XP to gain is: **500!**`)
            embed.attachFiles(["./assets/GIFs/Arfoire.gif"])
            embed.setImage("attachment://Arfoire.gif")
        }
    }
    else {
        var xpToAdd = Math.ceil(Math.random() * 25);
        embed.attachFiles(["./assets/GIFs/Hunt2.gif"])
        embed.setImage('attachment://Hunt2.gif')
        embed.addField(`TIME TO STRIKE!`, `**${message.author.username}** has hunted an **Dogoo**!\nBeware of Dogoos!\nMax possible XP to gain by killing this mob is: **25**`)
    }

    embed.setColor(color)
    embed.setFooter(`Gained XP: ${xpToAdd} | ${message.createdAt.toUTCString()}`)
    message.channel.send(embed)
    
    console.log(xpToAdd + "XP")

    XP.findOneAndUpdate({
        serverID: message.guild.id,
        userID: message.author.id
    }, { userName: message.author.username, serverName: message.guild.name }, (err, xp) => {
        if (err) console.log(err); 
        
        if (!xp) {
            var newXP = new XP({
                userID: message.author.id,
                userName: message.author.username,
                serverName: message.guild.name,
                serverID: message.guild.id,
                xp: xpToAdd,
                level: 0,
                toNextLVL: 1000,
            })
            newXP.save().catch(err => console.log(err));
        }
        else {
            xp.xp = xp.xp + xpToAdd;
            xp.save().catch(err => console.log(err));
            
            if (xp.xp >= xp.toNextLVL) {
                xp.level = xp.level + 1;
                xp.xp = xp.xp + xpToAdd;
                xp.toNextLVL += (750 + (xp.level * 350));
                levelUP = new RichEmbed()
                .attachFiles(["./assets/GIFs/LevelUp.gif"])
                .setImage('attachment://LevelUp.gif')
                .setColor(color)
                .setAuthor(`${message.author.username} has leveled up!`)
                .setDescription(`Your current level is: **${xp.level}!**`)
                message.channel.send(levelUP)
                
                setTimeout(function() {
                    xp.save().catch(err => console.log(err))
            }, 1000); }
        }
    })

    recently.add(message.author.id)
    recentServer.add(message.guild.id)

    setTimeout(function() {
        recently.delete(message.author.id)
        recentServer.delete(message.guild.id)
    }, ms("3m"))
},

config: {
    name: "hunt",
    aliases: ["hunter"],
    description: "Hunt a monster and get a XP!",
    usage: `\`${prefix}hunt\``,
    permissions: "Everyone"
}}
