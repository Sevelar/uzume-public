const mongoose = require('mongoose');

const banSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    serverID: String,
    serverName: String,
    action: String,
    bannedID: String,
    bannedByID: String,
    reason: String,
    bannedFor: String,
    time: String,
    channel: String,
    bannedUsername: String,
    bannedBy: String
});

module.exports = mongoose.model("Ban", banSchema);