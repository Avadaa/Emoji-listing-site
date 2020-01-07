const EmojiController = require('./controllers/EmojiController')

module.exports = (app) => {
    app.post('/api/emojis', EmojiController.getEmojis);
    app.post('/api/sidebar', EmojiController.getSidebar);
}