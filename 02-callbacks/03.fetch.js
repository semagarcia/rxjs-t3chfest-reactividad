// A promise: at least one callback, available: callbacks for OK and Error
const request = fetch('');

// Callback for successful
const successCb = (data) => console.log('Data: ', data);

// Callback for error
const errorCb = (error) => console.log('Error: ', error);

// Set callbacks
request.then(successCb, errorCb);

// Other option:
// request.then(successCb).catch(errorCb);
