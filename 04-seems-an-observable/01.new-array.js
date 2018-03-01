// New watcher structure instantiation
const observer = {
    onData: (data) => console.log(`Ohhh! Lion has said: ${data}`),
    onError: (error) => console.log('Error! ', error),
    onEnd: () => console.log('End!')
};


























// Our lion!
const observable = {
    subscribe: function subscribe(obs) {
        ["GRR", "GRRRRRR", "GRRR"].forEach(obs.onData);
        obs.onEnd();
    }
};






















// Stay tuned!
observable.subscribe(observer);