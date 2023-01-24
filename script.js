'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='Party time you got the correct element!!!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=69;

// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);
let secretnumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;





document.querySelector('.check').addEventListener('click',function (){
   const guess=Number(document.querySelector('.guess').value);
   console.log(guess);
   if(score>1){
   if(!guess){
    document.querySelector('.message').textContent='No number mister dont play with me';
    score--;
    document.querySelector('.score').textContent=score;
   }
   else if(guess===secretnumber){
    document.querySelector('.message').textContent='Nice you have guessed the number correctly';
    document.querySelector('.score').textContent=score;
   
    document.querySelector('.number').textContent=secretnumber;
    document.querySelector('body').style.backgroundColor='green';
    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;}
    
   }
   else if(guess>secretnumber && guess<=20){
    document.querySelector('.message').textContent='You have guessed a high number lower your guess';
    score--;
    document.querySelector('.score').textContent=score;
   }
   else if(guess<secretnumber && guess>=0){
    document.querySelector('.message').textContent='You have guessed a lower number raise your guess';
    score--;
    document.querySelector('.score').textContent=score;
   }
   else {
    document.querySelector('.message').textContent='You have entered the number out of bounds';
    score--;
    document.querySelector('.score').textContent=score;
   }
}
else{
    document.querySelector('.message').textContent='You lost the match dont worry try again';
    document.querySelector('.score').textContent=0;
   
}
});

document.querySelector('.again').addEventListener('click',function(){
   score=20;
    document.querySelector('.score').textContent=score;
    secretnumber=Math.trunc(Math.random()*20)+1;

    
    
   
    document.querySelector('.message').textContent='You have been given a new chance use it well';
   
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#000';
    
    
    
});