const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/product', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Successfully connected'))
    .catch(err => console.log('Error', err))