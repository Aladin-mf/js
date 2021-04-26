'use strict';
//selecting elements
const score0El = document.querySelector(`#score--0`);
const score1El = document.querySelector(`#score--1`);
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const current0El = document.querySelector(`#current--0`);
const current1El = document.querySelector(`#current--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const scores=[0,0]
let currentScore = 0
let activePlayer= 0 
let play=true

//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`)
const switchPlayer=function(){
    
document.querySelector(`#current--${activePlayer}`).textContent = 0;
currentScore = 0;
activePlayer = activePlayer === 0 ? 1 : 0;
player0El.classList.toggle(`player--active`);
player1El.classList.toggle(`player--active`);
}


//rolling dice functionality
btnRoll.addEventListener(`click`, function(){
 if(play){
   //1.generating a random dice
   const dice = Math.ceil(Math.random() * 6);

   //2. display dice
   diceEl.classList.remove(`hidden`);
   diceEl.src = `dice-${dice}.png`;

   //3. check for rolled 1.
   if (dice !== 1) {
     //add dice to the current score
     currentScore += dice;
     document.querySelector(
       `#current--${activePlayer}`
     ).textContent = currentScore;
   } else {
     // then switch to other player
     switchPlayer();
   }
 }
})

btnHold.addEventListener(`click`, function(){

    
 if (play) {
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent =
          scores[activePlayer];
        if (scores[activePlayer] >= 101) {
            play=false
            diceEl.classList.add(`hidden`)
          document
            .querySelector(`.player--${activePlayer}`)
            .classList.add(`player--winner`);
          document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove(`player--active`);
        } else {
          switchPlayer();
        }
      
 }

})



btnNew.addEventListener(`click`,function(){
   diceEl.classList.add(`hidden`);

document.querySelector(`#current--1`).textContent = 0;
currentScore = 0;
play=true
document.querySelector(`#score--0`).textContent = 0;
document.querySelector(`#score--1`).textContent = 0;
player0El.classList.remove(`player--winner`)
player1El.classList.remove(`player--winner`);
player0El.classList.add(`player--active`);
player1El.classList.remove(`player--active`);

})