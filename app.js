const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser')

const accountRoutes = require('./api/routes/accounts')
// const threadRoutes = require('./api/routes/threads')

// var routes = require('./routes/index.js');

// const app = express();


// module.exports = app;

// const Joi = require('joi');
// const mongoose = require('mongoose');


app.use(bodyparser.json())

app.use('/', accountRoutes)
app.use(express.json());
//

mongoose.connect("mongodb+srv://uthor123:anivia666@cluster0-hnegv.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true})

const port = process.env.PORT || 3000

app.listen(port, () => {
   console.log(`server on port ${port}`);
});
