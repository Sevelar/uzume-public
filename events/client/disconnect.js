const dateformat = require("dateformat");

module.exports = () => {
    console.log(`You have been disconnected at ${dateformat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT")}.`)
}