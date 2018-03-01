const fs = require('fs');
const path = require('path');
const watcher = require('./notifier');

// Callbacks
const dataCb = (data) => console.log('Data -> ', data);
const errorCb = (error) => console.log('Error! ', error);
const endCb = () => console.log('End!');

// Watcher instantiation
const w = watcher(dataCb, errorCb, endCb);

function read(pathFile, watcherObj) {
    fs.readFile(pathFile, 'utf8', (err, data) => {
        if(err || !data) {
            watcherObj.onError(err);
            return;
        }
        data.split('\n').forEach(watcherObj.onData);
        watcherObj.onEnd();
    });
}

// Execute
read('./file.txt', w);            // Valid file
//read('./fileNotFound.txt', w);  // Invalid file