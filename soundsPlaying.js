function playSound(KeyboardEvent){
    const audio = document.querySelector(`audio[data-key="${KeyboardEvent.key}"]`);
    const key = document.querySelector(`div[data-key="${KeyboardEvent.key}"]`);
    if(!audio) return;
    
    key.classList.add('playing'); //class playing in style.css
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
 window.addEventListener('keydown', playSound);

 /*
 window.addEventListener(
    "keydown",
    (KeyboardEvent) => {
      const p = document.createElement("p");
      p.textContent = `KeyboardEvent: key='${KeyboardEvent.key}' | code='${KeyboardEvent.code}'`;
      document.getElementById("output").appendChild(p);
      window.scrollTo(0, document.body.scrollHeight);
    },
    true,
  );*/