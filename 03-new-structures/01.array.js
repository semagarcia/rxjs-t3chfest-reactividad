// Import base structure (standardized)
const watcher = require('./notifier');

// Callbacks
const dataCb = (data) => console.log('Data -> ', data);
const errorCb = (error) => console.log('Error! ', error);
const endCb = () => console.log('End!');

// Watcher instantiation
const w = watcher(dataCb, errorCb, endCb);

function doSomethingWithNumbers(aWatcher) {
    [1, 2, 3, 4, 5].forEach(aWatcher.onData);
    aWatcher.onEnd();
}

// Execute
doSomethingWithNumbers(w);