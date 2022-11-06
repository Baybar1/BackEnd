const AuthorController = require('../controllers/authors.controllers');


module.exports = app => {
    app.get('/api/author', AuthorController.find);
    app.post('/api/author', AuthorController.create);
    app.get('/api/author/:id', AuthorController.findOne);
    app.put('/api/author/:id', AuthorController.update);
    app.delete('/api/author/:id', AuthorController.delete)
}