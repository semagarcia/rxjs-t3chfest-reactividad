const fs = require('fs');
const path = require('path');

const readStream = getObjectToReadFileStream();
readStream.on('chunk', (chunk) => console.log('New chunk read: ', chunk));
readStream.on('error', (err) => console.log('Error!!!: ', err));
readStream.on('end', () => console.log('End!'));

readStream.read('./file.txt');          // Valid file
//readStream.read('./fileNotFound.txt');  // Invalid file


function getObjectToReadFileStream() {
    let chunkCb = null,         // Callback for each chunk read
        errorCb = null,         // Callback for error found
        completeCb = null;      // Callback for entire file read

    return {
        on: (event, callback) => {
            switch(event) {
                case 'chunk': chunkCb = callback; break;
                case 'error': errorCb = callback; break;
                case 'end': completeCb = callback; break;
            }
        },
        read: (pathFile) => {
            fs.readFile(pathFile, 'utf8', (err, data) => {
                if(err || !data) {
                    errorCb(err);
                    return;
                }
                data.split('\n').forEach(chunkCb);
                completeCb();
            });
        }
    }
}