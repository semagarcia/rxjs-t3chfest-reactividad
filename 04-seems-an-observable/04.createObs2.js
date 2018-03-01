// Our observer 
const observer = {
    next: (data) => console.log(`Ohhh! Lion has said: ${data}`),
    error: (error) => console.log('Error! ', error),
    complete: () => console.log('End!')
};

// Creating an observable with a subscribe property
function createObservable(subscribe) {
    return {
        subscribe: subscribe,
        filter: filter
    };
}

function filter(myFilterFunction) {
    // "this" address to lionObservable (owner object). So, the input of filter operation is an observable
    const inputObservable = this;
    const outputObservable = createObservable((outputObserver) => {
        inputObservable.subscribe({
            next: (d) => {
                const output = myFilterFunction(d);
                if(output)
                    outputObserver.next(d);
            },
            error: (e) => outputObserver.error(e),
            complete: () => outputObserver.complete()
        });
    });
    return outputObservable;
}

const lionObservable = createObservable((obs) => {
    console.log('The lion is there... listen it!');
    ["GRR", "GRR", "GRRRRRR", "GRRR", "UOOAHHHH"].forEach(obs.next);
    obs.complete();
});

lionObservable
    .filter(sound => sound.length > 4)
    .subscribe(observer);