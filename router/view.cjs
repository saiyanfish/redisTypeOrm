const express = require('express');

const view = express.Router();

view.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

module.exports = view;
