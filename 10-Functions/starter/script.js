'use strict';
// const onWord=function (str) {
//     return str .replace(/ /g,``).toLowerCase()
// }
// const upperFirstWord=function (str) {
//     const [first,...other]=str.split(` `)
//     return [first.toUpperCase(),...other].join(` `)
// }
// const transform=function (str,fn) {
//     console.log(`${str}`);
//     console.log(`${fn(str)}`);
//     console.log(`transformed by  ${fn.name}`);

// }
// transform(`js is a cool lang`, upperFirstWord);
// transform(`js is a cool lang`, onWord);

// console.log(upperFirstWord(`hey madafaka`));

// const great=function(greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);

//     }
// }
// const greetHey=great(`hey`)
// greetHey(`aladin`)

// const gree = (great)=>{
//      return  (name) =>{
//        console.log(`${great} ${name}`);
//      };
// }
// gree(`hey`)(`madamada`);

// const airBd = {
//   airline: `Air Bangladesh`,
//   iataCode: `bd`,
//   bookings: [],
//   book(flightName, name) {
//     console.log(
//       `${name} booked a sit on ${this.airline} flight ${this.iataCode}${flightName}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightName}`, name });
//   },
// };
// airBd.book(239, `aladin`);

// const book=airBd.book


// const airNoakhali = {
//   airline: `Air NOakhali`,
//   iataCode: `Noakhali`,
//   bookings: [],

// };
// book.call(airNoakhali,343, `paden`)
// console.log(airNoakhali.bookings);

// const newBook = book.bind(airNoakhali);
// newBook(25,`aladin`)
// console.log(airNoakhali.bookings);


// function program (lola) {
// console.log(`${this.name} used for ${this.purpose} and its position is no ${this.position} run time ${lola} year`);

// }
// let mf1={
//   name: `python`,
//   purpose:`backend`,
//   position:2,
// }
//   let mf2 = {
//   name: `js`,
//   purpose:`web developing`,
//   position:1
// };
// let bind=program.bind(mf2,1)
// bind()







// //..........................................




// function printMe() {
//   console.log(`hello ${this.name}`);
    
//   }
  
//   let obj1={
//     name:`aladin`
//   }
//   let obj2 = {
//     name: `umar`,
//   };
//   let binded1 = printMe.bind(obj1);
//   let binded2 = printMe.bind(obj2);
//   binded1();
//   binded2();




// let fun = function (obj) {
//   obj.name=function () {
//     console.log(this.name);
    
//   }
// }
// let laden={
//   name:`laden`,
//   age:17
// }
// let aladin = {
//   name: `aladin`,
//   age: 19,
// };
// fun(laden)
// fun(aladin)
// laden.name()

// aladin.name()

/* 
const  addTax=(rate, value)=>value+value*rate
let addVat=addTax.bind(null,.23,100)

console.log(addVat());
 */

// const addTax=function (rate) {
//     return function (value) {
//         console.log(value+value*rate);
        
//     }
// }
// addTax(.23)(23)


// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
  
//  newAns(){
//     const Answer = Number(
//        prompt(`${this.question}\n ${this.options.join(`\n`)} \n (write options number)`)
//        )
//        console.log(Answer);
       
//        typeof Answer===`number`&&Answer<this.answers.length&&this.answers[Answer]++
//        this.display();
//        this.display(`string`);
       
//     },
     
// display(type=`array`){
// if (type===`array`) {
//    console.log(this.answers);
   
// }else if (type===`string`) {
//    console.log(`poll result is ${this.answers.join(`, `)}`);
   
// }
// }
// }
// document.querySelector(`.poll`).addEventListener('click',poll.newAns.bind(poll))


// poll.display.call({ answers: [5, 2, 3] },`string`);

// let runOnce=function () {
//    console.log(`this wont run again `);
   
// }
// runOnce()
// (function () {
//    console.log(`this wont run again `);
   
// })()



(function () {
    const header=document.querySelector(`h1`)
    header.style.color=`blue`

document.querySelector(`body`).addEventListener('click',function(){
header.style.color=`red`
})

}

)()