
let emojis = require('../../emojis.json')



module.exports = {
    getEmojis(req, res) {
        res.send(emojis)
    }
}