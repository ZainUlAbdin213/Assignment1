const express = require('express');
const mongoose = require("mongoose");
const app = express()
const port = 80;
require('dotenv').config({path:'./config.env'});
const connectDb=require('./db/db');
const User = require('./routes/routes');

app.use('/getAllUser', User)
connectDb();

app.use(express.json());

app.get('/homepage', (req, res) => {
    res.send(`<h1>Welcome</h1>` + `<p>Welcome to Home Page</p>`);
});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
