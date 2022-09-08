const express = require('express');
const compression = require('compression');
const { join } = require('path');
const router = require('../routers');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, '..', '..', 'public')));
app.use(router);

module.exports = app;
