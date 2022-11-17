const PlayerController = require('../controllers/sports.controllers')

module.exports = app => {
    app.get('/api/sports', PlayerController.find);
    app.post('/api/sports', PlayerController.create);
    app.get('/api/sports/:id', PlayerController.findOne);
    app.put('/api/sports/:id', PlayerController.update);
    app.delete('/api/sports/:id', PlayerController.delete);
}