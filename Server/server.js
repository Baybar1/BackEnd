const express = require('express');
const app = express();
const port = 8000;

require('./config/mongoose.config')

app.use(express.json(), express.urlencoded({extended: true}));

const AllMyUserRoutes = require('./routes/user.routes');
AllMyUserRoutes(app);

app.listen(8000, () => console.log('The server is running on port 8000'))
