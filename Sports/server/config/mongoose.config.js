const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/sports', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Succesfully Connected'))
    .catch(err => console.log('Error', err))