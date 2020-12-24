const { RichEmbed } = require('discord.js');
const { owner } = require('../../data/config.json');

module.exports = {
run: async (bot, message, args) => {
    if (!message.guild) return;
    if (!owner.includes(message.author.id)) return;

    /*let color = 0xabd6f2;
    message.channel.send({
        files: [{
            attachment: `./assets/Welcome.png`,
            name: `Welcome.png`
        }]
    }).then(() => {
        message.channel.send(
            "<:maLowee:578425457901568030> **__Welcome to Lowee!__** <:maLowee:578425457901568030>\n\nLowee takes pride in being a friendly and active place for all people, Neptunia lovers or not, ALL are welcome and treated equally with respect and decency. We at Lowee have one simple goal: To create a comfortable and peaceful community where any can come and be free of ridicule from age, race, gender, religion, and sexuality.\n\n<a:Blancspin:535793890347843604> **Permanent Invite Link:** https://discord.gg/emZJWbh"
        )                
    })
    setTimeout(function() { 
        message.channel.send({file:`./assets/Rules.png`})
     .then(() => {
        embed = new RichEmbed()
        .setColor(color)
        .addField("<:1_:578238586562936832> Follow Discord's Terms of Service and Community Guidelines.","They can be found at https://discordapp.com/terms and https://discordapp.com/guidelines. You are obligated to follow them within our server.\n\n**Forbidden actions, which will be strictly punished within our server:**\n• Sharing content glorifying or promoting, in general, self-harm or suicide.\n• Sharing content that is directly threatening someone's physical or financial state.\n• Sharing or linking to content with intent to shame or degrade another person.\n• Share images of gore and/or animal cruelty.\n• Distribute malwares.\n• Any illegal activity including, but not limited to, hacking, cracking or distribution of pirated software, or cheats or hacks for our or another company or person's Service.")
        message.channel.send(embed)
     }).then(() => {
         embed = new RichEmbed()
         .setColor(color)
         .addField("<:2_:578238586369867817> No drama within the Server.", "Arguments are inevitable. Do your best to keep negative confrontations out of the inappropriate channels (Ex. <#526178006927015937> , <#535334045370941441> etc.). If there is a disagreement amongst members, take it to <#533955650468970507> or DMs.")
         message.channel.send(embed)
     }).then(() => {
         embed = new RichEmbed()
         .setColor(color)
         .addField("<:3_:578238586152026143> Be respectful and tolerative.","Any kind of disrespectful behavior or discrimination towards other person's religion, race, sexuality or/and world view is forbidden. User harassment will not be tolerated within Lowee. Excuses like \"It's only a joke\" will not justify your actions and behavior.")
         message.channel.send(embed)
     }).then(() => {
         embed = new RichEmbed()
         .setColor(color)
         .addField("<:4_:578238586839760906> No Advertising.", "Server promotion through DM's, and within Lowee's borders are included in this rule. If someone is promoting their server through your DMs, do the right thing and report it to a staff member. Your reporting will be kept confidential. Furthermore, if you are found out or reported, there may be potential consequences.")
         message.channel.send(embed)
     }).then(() => {
         embed = new RichEmbed()
         .setColor(color)
         .addField("<:5_:578238586374062123> Common Sense.","Use your common sense. You should have a general understanding of right and wrong. Do not attempt to find loopholes by posting and deleting inappropriate content, talking negatively behind other members' back, or speaking about someone passive-aggressively. Eventually you will be caught or reported and the punishment may be severe.")
         message.channel.send(embed)
     
     }).then(() => {
         embed = new RichEmbed()
         .setColor(color)
         .addField("<:6_:578238586403422208> Annotation to Rule 5.","Just because there is not a rule about an offense does not mean disciplinary actions cannot be taken (Persisting with controversial/offensive debates, nsfw pfp's, alternate accounts to brag or avoid punishment).")
         message.channel.send(embed)
     }).then(() => {
         embed = new RichEmbed()
         .setColor(color)
         .addField("<:7_:578238586214809621> Respect the moderation team's decision.","The staff team has your best interest in mind. When they tell you to stop doing something, paying heed to such a decision would be favorable for you.")
         message.channel.send(embed)
     })
    }, 5000)

    setTimeout(function() {
        message.channel.send({
            files: [{
                attachment: "./assets/Channels.png",
                name: "Channels.png"
            }]
        }).then(() => {
            embed = new RichEmbed()
            .setColor(color)
            .setTitle("<:maLowee:578425457901568030> Info:")
            message.channel.send(embed)
        }).then(() => {
            message.channel.send("<:maArrows:615145780474413066><#509009321565093904>: All basic information about the server. A must-read.\n<:maArrows:615145780474413066><#615573274419789844>: Server suggestions, club suggestions and your way to speak with our staff team in one channel!\n<:maArrows:615145780474413066><#615201826098118657>: List of approved by staff team clubs.\n<:maArrows:615145780474413066><#531424921117655040>: List of emote servers for people with Nitro.\n<:maArrows:615145780474413066><#510970958874411018>: All partnered servers in one place!")
        }).then(() => {
            embed = new RichEmbed()
            .setColor(color)
            .setTitle("<:maLowee:578425457901568030> Main:")
            message.channel.send(embed)
        }).then(() => {
            message.channel.send("<:maArrows:615145780474413066><#526178006927015937>: The main, default discussion channel. Only on-topic, for random discussions - <#535334045370941441>.\n<:maArrows:615145780474413066><#576511812170940417>: The NSFW discussion channel. All kind of NSFW conversations and talks go to this channel.\n<:maArrows:615145780474413066><#535334045370941441>: Random, off-topic, spontaneous conversations and images reside here.\n<:maArrows:615145780474413066><#615201941181431828>: Gaming-oriented discussion and image-sharing channel.\n<:maArrows:615145780474413066><#615201751901011968>: Mobile gaming-oriented discussion and image-sharing channel.\n<:maArrows:615145780474413066><#615201784914509824>: Anime/manga discussion and image-sharing channel.\n<:maArrows:615145780474413066><#533955650468970507>: Venting channel for those, who want to express their emotions and discussion channel for controvertial topics.\n<:maArrows:615145780474413066><#509009335897292812>: Spoiler channel for those, who can't wait to share their experience after the game/movie/series.")
        }).then(() => {
            embed = new RichEmbed()
            .setColor(color)
            .setTitle("<:maLowee:578425457901568030> Media:")
            message.channel.send(embed)
        }).then(() => {
            message.channel.send("<:arrowsred:614883942805405808><#557480045074186250>: The R-18 image-sharing channel.\n<:maArrows:615145780474413066><#615565311567069198>: Meme and media-sharing channel.\n<:maArrows:615145780474413066><#509009341320527882>: Bot-spamming and commands channel.\n<:maArrows:615145780474413066><#536557497654312962>: Mudamaid hunting channel.\n<:maArrows:615145780474413066><#552871163097907220>: Mudamaid commands channel.\n<:maArrows:615145780474413066><#568712907236573184>: Fina and Uzume commands channel.")
        }).then(() => {
            embed = new RichEmbed()
            .setColor(color)
            .setTitle("<:maLowee:578425457901568030> Voice Channels:")
            message.channel.send(embed)
        }).then(() => {
            message.channel.send("<:maArrows:615145780474413066><#566062558306631680>: For those, who don't want to speak in VC.\n🔊 `General`\n🎶 `Music & Radio`")
        })        
    }, 10000)
    setTimeout(function() {
        message.channel.send({
            files: [{
                attachment: "./assets/Roles.png",
                name: "Roles.png"
            }]
        }).then(() => {
            embed = new RichEmbed()
            .setColor(0xbf2020)
            .setTitle("Not Safe For Work!")
            .setDescription("**This role gives you the access to the NSFW channels!**\n\nSexual or naked imagery of any description for any very young characters such as Rom, Ram, Neptune, Plutia, Blanc, White Heart, White Sister, Bouquet, Uni, Peashy, etc, are strictly forbidden, Nudes of yourself are also banned.")
            message.channel.send(embed)
        }).then(() => {
            embed = new RichEmbed()
            .setColor(0x91908f)
            .setTitle("Roleplay Access!")
            .setDescription("**This role gives you the access to the Roleplay category!**\n\n• No Godmodding or Powergaming. Keep the roleplay fair for everyone in it.\n• Ask before joining the roleplay. Please ask peoplem if you are allowed to join in to prevent arguments.\n• No Erotic Role-Playing as Loli/Underaged/Animal charcter. Playing as one of these in a erotic roleplay is known for making people feel uncomfortable.")
            message.channel.send(embed)
        }).then(() => {
            embed = new RichEmbed()
            .setColor(0xfff600)
            .setTitle("Holy Grail War!")
            .setDescription("**Read more in <#566433883013382164>!**\n\nThe Holy Grail War (聖杯戦争, Seihai Sensō?) is a competition that decides the ownership of the Holy Grail through intense battle royale. While there have been many conflicts over supposed Holy Grails in the past, this term refers to those specifically based around Masters, usually proficient magi, summoning Servants, Heroic Spirits brought forth as familiars, and meeting in battle until only one pair is left to claim the Holy Grail.")
            message.channel.send(embed)
        })
    }, 15000)*/
    message.channel.send("Better be safety!~")    
},

config: {
    name: "general",
    aliases: ["ge"]
}}