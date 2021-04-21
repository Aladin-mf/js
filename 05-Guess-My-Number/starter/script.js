'use strict';
/* console.log(document.querySelector(`.message`).textContent);
document.  querySelector(`.message`).textContent=`correct number`
document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`) .textContent= 13;
document.querySelector(`input`).value= 34243453;
console.log(document.querySelector(`input`).value);
 */
let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
const life = (document.querySelector(`.life`).textContent = `💔 Life: `);

document.querySelector(`.check`).addEventListener(`click`, function () {
  let guess = Number(document.querySelector(`.guess`).value);
  //when there is no guess
  if (!guess) {
    document.querySelector(
      `.message`
    ).textContent = `নাম্বার লেখতে কি কষ্ট লাগে 😒 ? `;
  }
  //when the number is equ
  else if (guess === secretNumber) {
    document.querySelector(
      `.message`
    ).textContent = `🎉🎉🎉ha, ab thick he bete...!🎉🎉🎉`;
     document.querySelector(`body`).style.backgroundColor = `#60b347`;
       document.querySelector(`body`).style.color = `hsl(0, 0%, 17%)`;
     document.querySelector(`.number`).style.width=`30rem`
     
document.querySelector(`.number`).textContent = secretNumber;

  }
 
  //when the number is big
  else if (guess > secretNumber) {
    document.querySelector(
      `.message`
    ).textContent = `your number is high, wrong answer`;
    score -= 1;
    document.querySelector(`.score`).textContent = score;
    life;
  }
  //when the number is low
  else {
    document.querySelector(
      `.message`
    ).textContent = `your number is low, wrong answer`;
    score -= 1;
    document.querySelector(`.score`).textContent = score;
    life;
  }

  //when there is no life left
  if (score <= 0) {
    document.querySelector(
      `.label-score`
    ).textContent = `👎you loos, Try again👎`;
  }
});

document.querySelector(`.again`).addEventListener(`click`,function(){
score=20
    secretNumber = Math.floor(Math.random() * 20 + 1);
     document.querySelector(`body`).style.backgroundColor = `#222`;
     document.querySelector(`.message`).textContent = `start guessing...`;
     document.querySelector(`body`).style.color = `white`;
     document.querySelector(`.number`).style.width = `15rem`;
     document.querySelector(
       `.number`
     ).textContent=`?`;
document.querySelector(`.score`).textContent =score;
document.querySelector(`.guess`).value = ``;
})