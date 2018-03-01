// JavaScript implementation for "sync-way.ts" example, adapted to be executed
// directly in the browser and simulating a network delay
let PersonSync = {
    setName: (name) => {
        console.log('%c[T3chFest2018] Setting name...', 'background:#034173; color:white');
        setTimeout(() => {
            console.log('%c[T3chFest2018] Name successfully set!', 'background:#090; color:white');
        }, 4000);
    },

    setUsername: (surname) => {
        console.log('%c[T3chFest2018] Setting surname...', 'background:#034173; color:white');
        setTimeout(() => {
            console.log('%c[T3chFest2018] surname successfully set!', 'background:#090; color:white');
        }, 3000);
    },

    setAge: (age) => {
        console.log('%c[T3chFest2018] Setting age...', 'background:#034173; color:white');
        setTimeout(() => {
            console.log('%c[T3chFest2018] age successfully set!', 'background:#090; color:white');
        }, 4500);
    }
}; 