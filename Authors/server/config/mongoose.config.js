const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/author', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Successfully Connected'))
    .catch(err => console.log('Error',err))