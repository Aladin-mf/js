'use strict';
// BANKIST APP

// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];


// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');
// const creatUserName = function (accs) {
//   accs.forEach(function (acc) {
//     acc.userName = acc.owner
//       .toLowerCase()
//       .split(` `)
//       .map(name => name[0])
//       .join(``);
//   });
// };
// creatUserName(accounts);

// const displayMovements = function (movements,sort=false) {
//   containerMovements.innerHTML = ` `;
//  const sorted=sort?movements.slice().sort((a,b)=>a-b):movements
//   sorted.forEach(function (move, i) {
//     let type = move > 0 ? `deposit` : `withdrawal`;
//     const html = `
//     <div class="movements__row">
//           <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//           <div class="movements__value">${move}</div>
         
//         </div>`;

//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };



// const calcDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${acc.balance} eur`;
  
// };




// const displaySummery=function (acc) {
// const income=acc.movements.filter(move=>move>0).reduce((acc,mov)=>acc+mov,0)
// labelSumIn.textContent=`${income} 💲`

// const outcome=acc.movements.filter(move=>move<0).reduce((acc,mov)=>acc+mov,0)
// labelSumOut.textContent = `${Math.abs(outcome)} 💲`;


// const interest=acc.movements.filter(move=>move>0).map(deposit=>(deposit*acc.interestRate)/100).filter(int=>int>=1).reduce((acc,mov)=>acc+mov,0)
// labelSumInterest.textContent = `${interest} 💲`;

// }








// //...................//login.....................
// const updateUi=function (acc) {
//      displayMovements(acc.movements);
//      calcDisplayBalance(acc);
//      displaySummery(acc);
// }

// let currentAccount

// btnLogin.addEventListener('click',function(e){
//   e.preventDefault()
//  currentAccount=accounts.find(acc=>acc.userName===inputLoginUsername.value)
 
// console.log(currentAccount);
// if (currentAccount?.pin===Number(inputLoginPin.value)) {
//  labelWelcome.textContent=`welcome back, ${currentAccount.owner.split(` `)[0]}`

// }


// inputLoginUsername.value=inputLoginPin.value= ``
// inputLoginPin.blur()
// containerApp.style.opacity=1

//   updateUi(currentAccount)

// })


// ///transfer money

// btnTransfer.addEventListener('click',function(e){
// e.preventDefault()
// const amount= Number(inputTransferAmount.value)
// const receiverAcc=accounts.find(acc=>acc.userName ===inputTransferTo.value)
// inputTransferTo.value=inputTransferAmount.value=``
// if (amount>0&&currentAccount.balance>=amount&&receiverAcc?.userName!==currentAccount.userName) {
//  currentAccount.movements.push(-amount)
//  receiverAcc.movements.push(amount);
  
// }else{
//   console.log(`tor hogadar vitre pada hawar poo`);

// }
// })
// ///...........loan ......................
// btnLoan.addEventListener('click',function(e){
// e.preventDefault()
// const amount=Number(inputLoanAmount.value)
// if (amount>0&&currentAccount.movements.some(sum=>sum>=amount*.1)) {
//   currentAccount.movements.push(amount)
//   updateUi(currentAccount)
//   inputLoanAmount.value=``
// }


// })
// ///ACCOUNT CLOSE

// btnClose.addEventListener('click',function(e){
// e.preventDefault()
// console.log(`nnvfobvnes`);

// if (currentAccount.userName===inputCloseUsername.value &&currentAccount.pin === Number(inputClosePin.value)) {
//   console.log(`madarchad ...kehna keya chate ho tum`);
//   const index=accounts.findIndex(acc=>acc.userName===currentAccount.userName)
//   accounts.splice(index, 1)
// containerApp.style.opacity = 0;
  
// }
// inputCloseUsername.value = inputClosePin.value = ``;

// })

// const overAllBalance=accounts.flatMap(acc=>acc.movements).reduce((acc,mov)=>acc+mov,0)


// let sorted=false
// btnSort.addEventListener('click',function(e){
// e.preventDefault()
// displayMovements(currentAccount.movements,!sorted)
// sorted=!sorted

// })
/////////////////////////////////////////////////
/////////////////////////////////////////////////

///....ascending
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


///////////
///////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);


/////////////////////////////////////////////////
//  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//  movements.forEach(function (move,i) {
//    if (move>0) {
//      console.log(`${i + 1}   u deposited ${move}`);

//    }else{
//      console.log(`${i + 1} u withdrew ${Math.abs(move)}`);

//    }
//  })

// let dogJulia = [3, 5, 2, 12, 7];
// let dogKate = [4, 2, 15, 8, 3];

// const checkDogs = function (arr1, arr2) {
//   let arr=arr1.concat(arr2)
//   arr                              ``.forEach(function (year, i) {
//     if (year >= 3) {
//       console.log(`dog num ${i + 1} is an adult and its is ${year} years old`);
//     } else {
//       console.log(`dog num ${i + 1} is a puppy and its is ${year} years old`);
//     }
//   });

// };

// dogJulia.splice(0, 1);
// dogJulia.splice(-2);

// checkDogs(dogJulia, dogKate);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// let eurToUsd=1.1
// let usd=movements.map(move=>

//   move *eurToUsd

// )
// console.log(usd);

// const deposits= movements.filter(function (move) {
//   return move>0
// })
// console.log(deposits);
// const withdrawal = movements.filter(move =>move < 0
// );
// console.log(withdrawal);
// const total = movements.reduce((acc,cur)=> acc+cur
// ,0)

// console.log(total);
// const max = movements.reduce((acc,mov)=>{
//   if (acc>mov) {
//     return acc
//   }
//   else
//   {
//     return mov
//   }
// })
// console.log(max);(age<=2?2*age:16+age*4)
// let dogs
// const calcAvrHumanAge= function (dogAges) {
// const humanAge=dogAges.map(age=>(age<=2?2*age:16+age*4))
// console.log(humanAge);
// dogs.push(humanAge.filter(bachai=>bachai>=18))

// let aaaavr=dogs.reduce((mot,num)=>mot+num/dogs.length,0)
// dogs

// return aaaavr
// }
// let avr1=calcAvrHumanAge([5, 2, 3, 1, 15, 8, 3])
// console.log(avr1);
//  let nnn=Array.from({length:100},(_,i)=>1+i)
 
//  labelBalance.addEventListener('click',function(){
   
//    let movementUi=Array.from(document.querySelectorAll(`.movements__value`))
//    console.log(movementUi.map(el=>Number(el.textContent)));
   
 
 
//   })


const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];


//........cha 1
dogs.forEach((dog)=>{
 dog.recommendedFood=Math.trunc(dog.weight ** 0.75 * 28 )
  dog.weight
})
//........cha 2
let sararKutta=dogs.find(acc=>acc.owners.includes(`Sarah`))
console.log(
  `sarar kutta day kintu ${
    sararKutta.curFood > sararKutta.recommendedFood ? 'beshi beshi' : 'kom kom'
  } khaitaase`
);
//........cha 3
let eatTooMuch=dogs.filter(dog=>dog.recommendedFood<dog.curFood).map(dog=>dog.owners).flat()
let eatTooLittle = dogs
  .filter(dog => dog.recommendedFood > dog.curFood)
  .map(dog => dog.owners)
  .flat();
eatTooMuch
eatTooLittle
//........cha 4
console.log(`${eatTooMuch.join(` , `)}'s dogs eat too much`);
console.log(`${eatTooLittle.join(`,`)}'s dogs eat too little`);
//........cha 5
console.log( dogs.some(dog => dog.recommendedFood === dog.curFood));

//........cha 6
let okFood=dogs.some(dog=>dog.curFood>dog.recommendedFood*.90&&dog.curFood<dog.recommendedFood*1.1)
console.log(
  dogs.filter(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

let copyCat=dogs.slice().sort((a,b)=>a.recommendedFood-b.recommendedFood)
dogs
copyCat
