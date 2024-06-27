document.addEventListener('DOMContentLoaded', function() {
    let sounds = {
        applause: new Audio('../sounds/applause.mp3'),
        boo: new Audio('../sounds/boo.mp3'),
        gasp: new Audio('../sounds/gasp.mp3'),
        toda: new Audio('../sounds/toda.mp3'),
        victory: new Audio('../sounds/victory.mp3'),
        wrong: new Audio('../sounds/wrong.mp3')
    }
document.getElementById("applause").addEventListener('click', function() { 
        sounds.applause.currentTime = 0;
        sounds.applause.play();
    });
document.getElementById("boo").addEventListener('click',function(){ 
    sounds.boo.currentTime = 0;
    sounds.boo.play();
});
document.getElementById("gasp").addEventListener('click',function(){ 
    sounds.gasp.currentTime = 0;
    sounds.gasp.play();
});
document.getElementById("toda").addEventListener('click',function(){ 
    sounds.toda.currentTime = 0;
    sounds.toda.play();
});
document.getElementById("victory").addEventListener('click',function(){ 
    sounds.victory.currentTime = 0;
    sounds.victory.play();
});
document.getElementById("wrong").addEventListener('click',function(){ 
    sounds.wrong.currentTime = 0;
    sounds.wrong.play();
});
document.getElementById("stop").addEventListener('click',function(){
        for (let sound in sounds) {
            sounds[sound].pause();
        }
    });
						  });