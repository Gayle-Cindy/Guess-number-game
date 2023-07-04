'use strict';

let score=20;
let highScore=0;
let randomNumber =(Math.floor(Math.random()*20)+1);
document.querySelector(".number").textContent=randomNumber;
// console.log(randomNumber, typeof randomNumber )
const displayMessage = function(message){
    document.querySelector(".message").textContent=message;
}

// event listener for check button
document.querySelector(".check").addEventListener("click",function(){
const guess = Number(document.querySelector(".guess").value)
console.log(guess, typeof guess)
// when there is an empty input
if(!guess){
    // document.querySelector(".message").textContent="No number!"
displayMessage('No number!');


    // when guess is wrong
}else if( guess !== randomNumber){
    if(score>1){ 
        // document.querySelector(".message").textContent= guess > randomNumber ? " Too high! " : "Too low!";
        displayMessage(guess > randomNumber ? " Too high! " : "Too low!")
        score = score - 1;
        document.querySelector(".score").textContent=score;
    
        }else{
            // document.querySelector(".message").textContent="You lost 💥💥!"
            displayMessage("You lost 💥💥!");
            document.querySelector(".score").textContent=0;
        }
}

// // when guess is less than random number
// else if(guess<randomNumber){
//     if(score>1){ 
//     document.querySelector(".message").textContent=" Too low! "
//     score = score - 1;
//     document.querySelector(".score").textContent=score;

//     }else{
//         document.querySelector(".message").textContent="You lost 💥💥!"
//         document.querySelector(".score").textContent=0;
//     }
   
//     // when guess is greater than random number
// }else if(guess>randomNumber){
//     if (score>1){
//         document.querySelector(".message").textContent="Too high!";
//         score --;
//         document.querySelector(".score").textContent=score;
//     }else{
//         document.querySelector(".message").textContent="You lost 💥💥!";
//         document.querySelector(".score").textContent=0;
//     }
    
// }

// when correct number is input
else {
    // document.querySelector(".message").textContent="🎉Correct number!";
    displayMessage('🎉Correct number!');
    document.querySelector("body").style.backgroundColor="#60b347";
    document.querySelector(".number").style.width='30rem';
// highscore
if(score>highScore){
    highScore = score;
    document.querySelector('.highscore').textContent=highScore;
}
}
});

// event listener for again button

document.querySelector(".again").addEventListener("click",function(){
    score=20;
    randomNumber =(Math.floor(Math.random()*20)+1);
    document.querySelector(".score").textContent=score; 
    document.querySelector(".number").textContent=randomNumber;
    // document.querySelector(".message").textContent="Start guessing...";
    displayMessage("tart guessing...");
    document.querySelector(".guess").value="";
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".number").style.width="15rem";
    document.querySelector('.highscore').textContent=highScore;

})

