// Check touchSupport and keyboardSupport
// It is assumed that a smartphone is being used when the width is < 400
var windowWidth = window.screen.width;
var touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints;
var keyboardSupport = navigator.keyboard || 'KeyboardEvent' in window;

var addHowToDescription = document.getElementById('firstContainer');

    if (touchSupport && keyboardSupport && !(windowWidth<400)) {
        addHowToDescription.textContent = 'Play sounds by hitting the keys on the keyboard OR simply touch the keys!';
    } else if (!keyboardSupport || (windowWidth<400)) {
        addHowToDescription.textContent = 'Touch the keys to play sounds!';
    } else {
        addHowToDescription.textContent = 'Play sounds by hitting the keys!';
    }