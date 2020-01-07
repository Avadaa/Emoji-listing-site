
let emojis = require('../../emojis.json')
let sidebarIds = require('../config/sidebar').ids


module.exports = {
    getEmojis(req, res) {
        res.send(emojis)
    },
    getSidebar(req, res) {
        res.send(sidebarIds)
    }
}