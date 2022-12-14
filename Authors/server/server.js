const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json(), express.urlencoded({extended:true}));
const port = 8000;
require('./config/mongoose.config');
require('./routes/authors.routes')(app);




app.listen(port, () => console.log(`Locked and Loaded on port ${port}`));