const express = require('express');
const port = 8000;
const app = express();
app.use(express.json(), express.urlencoded({extended: true}));
require('./config/mongoose.config')

const AllMyRoutes = require('./routes/jokes.routes');
AllMyRoutes(app);


app.listen(port, () => {console.log(`Loaded on port ${port}`)})