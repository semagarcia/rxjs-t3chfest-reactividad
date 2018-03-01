// Base structure (standardized)
const watcher = (data, error, end) => {
    return {
        onData: data,
        onError: error,
        onEnd: end
    }
};

// A promise: at least one callback, available: callbacks for OK and Error
const request = fetch('');
// const request = fetch('http://www.google.es');  // To force an error

// Callbacks
const dataCb = (data) => console.log('Data: ', data);
const errorCb = (error) => console.log('Error: ', error);

// Watcher instantiation
const w = watcher(dataCb, errorCb);

// Set callbacks
request.then(w.onData, w.onError);