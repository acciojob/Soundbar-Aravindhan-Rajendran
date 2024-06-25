//your JS code here. If required.
document.querySelectorAll('.btn');
let sounds=[];
document.getElementById("appl").addEventListener('click',()=>{ let sound = new Audio('./sounds/appl.mp3');
															 sounds.push(sound);
															  sound.currentTime = 0;
															  sound.play();});
document.getElementById("boo").addEventListener('click',()=>{let sound=new Audio('./sounds/boo.mp3');
															 sounds.push(sound);
															 sound.currentTime = 0;
															 sound.play();});
document.getElementById("gasp").addEventListener('click',()=>{let sound=new Audio('./sounds/gasp.mp3');
															 sounds.push(sound);
															  sound.currentTime = 0;
															  sound.play();});
document.getElementById("toda").addEventListener('click',()=>{let sound=new Audio('./sounds/toda.mp3');
															 sounds.push(sound);
															  sound.currentTime = 0;
															  sound.play();});
document.getElementById("victor").addEventListener('click',()=>{let sound=new Audio('./sounds/victor.mp3');
															 sounds.push(sound);
																sound.currentTime = 0;
																sound.play();});
document.getElementById("wrong").addEventListener('click',()=>{let sound=new Audio('./sounds/wrong.mp3');
															sounds.push(sound);
															   sound.currentTime = 0;
															   sound.play();});
document.getElementById("stop").addEventListener('click',()=>{sounds.forEach(sound =>
															  sound.pause());});
