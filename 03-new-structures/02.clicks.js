// Base structure (standardized)
const watcher = (data, error, end) => {
    return {
        onData: data,
        onError: error,
        onEnd: end
    }
};

// Callback
const clickCallback = (event) => console.log('Click captured!!', event);

// Watcher instantiation
const w = watcher(clickCallback, null, null);

// Listen clicks
const bodyElement = document.querySelector('body');
bodyElement.addEventListener('click', w.onData);