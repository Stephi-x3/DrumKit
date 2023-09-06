function playSound(KeyboardEvent){
    const audio = document.querySelector(`audio[data-key="${KeyboardEvent.key}"]`);
    if (!audio) {
        return;
    } else {
        const key = document.querySelector(`div[data-key="${KeyboardEvent.key}"]`);
        key.classList.add('playing'); //class playing in style.css
        audio.play();
        audio.currentTime = 0;
    }    
}

function removeTransition(TransitionEvent){
    console.log(TransitionEvent.target);
    if (TransitionEvent.type != 'transitionend') {
        return;
    } else {
        //TransitionEvent.target = html element that belongs to TransitionEvent
        TransitionEvent.target.classList.remove('playing');
    }    
}

window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//transitionend: when a CSS transition has completed

// Eine Funktion, die auf das Touch-Ereignis reagiert
function meineFunktion() {
    alert('Du hast das Element berührt!');
}

// Das HTML-Element auswählen, auf das wir reagieren möchten
var touchClick = document.getElementById('touchEvent');

// Ein Touch-Ereignis hinzufügen und die Funktion verknüpfen
touchClick.addEventListener('touchstart', meineFunktion, false);
