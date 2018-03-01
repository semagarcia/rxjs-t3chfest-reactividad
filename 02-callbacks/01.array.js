const array = [1, 2, 3, 4, 5];

// Just a callback
const callback = (n) => console.log('Number: ', n);

console.log('Starting...\n');
array.forEach(callback);  // Sync callback
console.log('\nEnding...');