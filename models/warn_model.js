const mongoose = require('mongoose');

const warnSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    serverName: String,
    username: String,
    userID: String,
    reason: String,
    reportedBy: String,
    reportedByID: String,
    time: String,
    warnCount: Number
});

module.exports = mongoose.model("Warn", warnSchema);