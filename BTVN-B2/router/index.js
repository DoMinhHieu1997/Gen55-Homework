const express = require('express');


const studentRouter = require('./students');

const app = express();


app.use('/students', studentRouter);

module.exports = app;