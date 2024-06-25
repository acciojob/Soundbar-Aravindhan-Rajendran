window.onload = function(){
    let sounds = {
        applause: new Audio('./sounds/applause.mp3'),
        boo: new Audio('./sounds/boo.mp3'),
        gasp: new Audio('./sounds/gasp.mp3'),
        toda: new Audio('./sounds/toda.mp3'),
        victory: new Audio('./sounds/victor.mp3'),
        wrong: new Audio('./sounds/wrong.mp3')
    }
document.getElementById("applause").addEventListener('click',()=>{ 
    sounds.applause.currentTime = 0;
    sounds.applause.play();
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
document.getElementById("victory").addEventListener('click',()=>{ 
    sounds.victory.currentTime = 0;
    sounds.victory.play();
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