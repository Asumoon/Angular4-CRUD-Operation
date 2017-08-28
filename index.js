const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./configdb/database');

// Connection to database
mongoose.connect(config.database);

// Connection Success to DB
mongoose.connection.on('connected',() => {
    console.log('Connected to the Database ' +config.database);
});

//on Error while Connecting
mongoose.connection.on('error',(err) => {
    console.log('connection ERROR Try Again Database Failed to Connect ' +err);
});

const app = express();
const articles = require('./routers/articles');
//const quizTest = require('./routers/allquizes');


// Port to start 
const port = 2200;

// cors middleware
app.use(cors());

// Set Static Public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/articles',articles);
//app.use('/articles',quizTest);


// Index Route
app.get('/', (req, res) => {
    res.send('this is initial page for starting all session')
});

app.listen(port, () => {
    console.log('server started in' + port)
})