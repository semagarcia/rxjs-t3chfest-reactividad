// JavaScript implementation for "async-rp-way.ts" example, adapted to be executed
// directly in the browser and simulating a network delay
let PersonAsync = {
    setName: (name, cb) => {
        console.log('%c[T3chFest2018] Setting name (async)...', 'background:#034173; color:white');
        setTimeout(() => {
            console.log('%c[T3chFest2018] Name successfully set; executing callback', 'background:#090; color:white');
            cb();
        }, 4000);
    },

    setUsername: (surname, cb) => {
        console.log('%c[T3chFest2018] Setting surname (async)...', 'background:#034173; color:white');
        setTimeout(() => {
            console.log('%c[T3chFest2018] surname successfully set; executing callback', 'background:#090; color:white');
            cb();
        }, 3000);
    },

    setAge: (age, cb) => {
        console.log('%c[T3chFest2018] Setting age (async)...', 'background:#034173; color:white');
        setTimeout(() => {
            console.log('%c[T3chFest2018] age successfully set; executing callback', 'background:#090; color:white');
            cb();
        }, 5000);
    }
}; 