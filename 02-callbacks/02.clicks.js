const bodyElement = document.querySelector('body');

function callback($event) {
    console.log('Clicked!', $event);
}

// Just an async callback
bodyElement.addEventListener('click', callback);