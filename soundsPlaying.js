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

function playSoundAfterTouch(TouchEvent){
    const audio = document.querySelector(`audio[data-key="${TouchEvent.target.parentNode.attributes[0].nodeValue}"]`);
    if (!audio) {
        return;
    } else {
        const key = document.querySelector(`div[data-key="${TouchEvent.target.parentNode.attributes[0].nodeValue}"]`);
        key.classList.add('playing'); //class playing in style.css
        audio.play();
        audio.currentTime = 0;
    } 
}

function removeTransition(TransitionEvent){
    if (TransitionEvent.type != 'transitionend') {
        return;
    } else {
        //TransitionEvent.target = html element that belongs to TransitionEvent
        TransitionEvent.target.classList.remove('playing');
    }    
}

const keys = document.querySelectorAll('.key');
//touch
keys.forEach(key => key.addEventListener('touchstart', playSoundAfterTouch, false));
//keyboard
window.addEventListener('keydown', playSound);

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

