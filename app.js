const express= require('express');
const app = express();
const router = require('./Routes/auth.route')


// In-built middleware
app.use(express.json)
app.use(express.urlencoded({extended: true}))

app.use(router);


module.exports = app;