const mongoose = require('mongoose')

const xpSchema = mongoose.Schema({
    serverID: String,
    serverName: String,
    userName: String,
    userID: String,
    xp: Number,
    level: Number,
    toNextLVL: Number
})

module.exports = mongoose.model("XP", xpSchema);