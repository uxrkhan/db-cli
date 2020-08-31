#!/usr/bin/env node

const mongoose = require('mongoose');

const commander = require('./commands');
const {uri} = require('./config/keys');

// map global promise to mongoose promise
mongoose.Promise = global.Promise;

// print connecting... 
var i = 1;
var connectingInterval = setInterval(() => {
    process.stdout.write('Connecting... ' + i++ + '/30' + '\r');
},1000);

const db = mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => { 
    clearInterval(connectingInterval);
    console.log('Connected to database.');
    
    // start parsing and and executing the command
    commander.parse(process.argv);

}).catch(err => {
    if (err) {
        clearInterval(connectingInterval);
        console.log('An error occured while trying to connect.');
    }
});


