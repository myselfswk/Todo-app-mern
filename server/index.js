const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./db');
const tasks = require('./routes/task.js');

const app = express();
const port = process.env.PORT || 8080;


connection();

app.use([bodyParser.urlencoded({extended: true,}), express.json()])
app.use(cors());

app.use('/api/tasks', tasks);

app.listen(port, () => console.log('Its Working'));

// module.exports = app;
