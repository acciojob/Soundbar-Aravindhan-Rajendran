//your JS code here. If required.
window.onload = function(){
    let sounds = {
        appl: new Audio('./sounds/appl.mp3'),
        boo: new Audio('./sounds/boo.mp3'),
        gasp: new Audio('./sounds/gasp.mp3'),
        toda: new Audio('./sounds/toda.mp3'),
        victor: new Audio('./sounds/victor.mp3'),
        wrong: new Audio('./sounds/wrong.mp3')
    }
document.getElementById("appl").addEventListener('click',()=>{ 
    sounds.appl.currentTime = 0;
    sounds.appl.play();
});
document.getElementById("boo").addEventListener('click',()=>{ 
    sounds.boo.currentTime = 0;
    sounds.boo.play();
});
document.getElementById("gasp").addEventListener('click',()=>{ 
    sounds.gasp.currentTime = 0;
    sounds.gasp.play();
});
document.getElementById("toda").addEventListener('click',()=>{ 
    sounds.toda.currentTime = 0;
    sounds.toda.play();
});
document.getElementById("victor").addEventListener('click',()=>{ 
    sounds.victor.currentTime = 0;
    sounds.victor.play();
});
document.getElementById("wrong").addEventListener('click',()=>{ 
    sounds.wrong.currentTime = 0;
    sounds.wrong.play();
});
document.getElementById("stop").addEventListener('click',()=>{
        for (let sound in sounds) {
            sounds[sound].pause();
        }
    });
}