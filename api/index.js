const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const config = require('config');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '50mb' }))

// Load all controllers

fs.readdirSync('./api/controllers').forEach(controller => {
  require(`./controllers/${controller}`)(app)
})


app.listen(config.get('porta'), () => console.log('A API está funcionando'));