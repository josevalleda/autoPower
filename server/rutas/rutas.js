const express = require('express');
const app = express();

app.use(require('./usuario'));
app.use(require('./vehiculo'));

module.exports = app;