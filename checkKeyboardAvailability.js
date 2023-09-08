// Check touchSupport and keyboardSupport
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints || (windowWidth<400);
var keyboardSupport = navigator.keyboard || 'KeyboardEvent' in window;

var addHowToDescription = document.getElementById('firstContainer');

    if (touchSupport && keyboardSupport) {
        addHowToDescription.textContent = 'Play sounds by hitting the keys on the keyboard OR simply touch the keys!';
    } else if (!keyboardSupport) {
        addHowToDescription.textContent = 'Touch the keys to play sounds!';
    } else {
        addHowToDescription.textContent = 'Play sounds by hitting the keys!';
    }