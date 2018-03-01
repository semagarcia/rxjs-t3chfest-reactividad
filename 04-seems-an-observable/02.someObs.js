// Two people are observing a lion and reacting to its sounds
const observer1 = {
    onData: (data) => console.log(`[Obs1] Ohhh! Lion has said: ${data}`),
    onError: (error) => console.log('[Obs1] Error! ', error),
    onEnd: () => console.log('[Obs1] End!')
};

const observer2 = {
    onData: (data) => console.log(`[Obs2] Ohhh! Lion has said: ${data}`),
    onError: (error) => console.log('[Obs2] Error! ', error),
    onEnd: () => console.log('[Obs2] End!')
};

// Our lion!
const observable = {
    subscribe: function subscribe(obs) {
        ["GRR", "GRRRRRR", "GRRR"].forEach(obs.onData);
        obs.onEnd();
    }
};

// Subscribe action
observable.subscribe(observer1);
observable.subscribe(observer2);