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

const keys = document.querySelectorAll('.key');
//touch
keys.forEach(key => key.addEventListener('touchstart', playSound, false));
//keyboard
window.addEventListener('keydown', playSound);

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//transitionend: when a CSS transition has completed
/*
// Eine Funktion, die auf das Touch-Ereignis reagiert
function meineFunktion() {
    const p = document.createElement("p");
    p.textContent = "Element berührt!";
    document.getElementById("output").appendChild(p);
}

// Das HTML-Element auswählen, auf das wir reagieren möchten == keys
var touchClick = document.getElementById('touchEvent');


// Ein Touch-Ereignis hinzufügen und die Funktion verknüpfen
touchClick.addEventListener('touchstart', meineFunktion, false);*/

