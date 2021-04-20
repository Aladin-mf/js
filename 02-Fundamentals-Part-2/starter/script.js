"use strict";
// let hasDriversLicense = false;
// let pass = true;

// if (pass) hasDrivesrLicense = true;
// if (hasDriversLicense) console.log(`yea , i can drive naw`);

// const interface=`audio`

// function logger(){
//     console.log(`i am a aladin`)
// }

// logger();
// logger();
// logger();
// logger();

// function fruitProcessor (apple, oranges){
//     const juss =console.log( `juice with ${apple} apple and ${oranges} oranges`)
//     return juss
// }
// fruitProcessor(2,3)

// function calcAge1 (birthYear,currentYear){
//     return currentYear - birthYear
// }

// calcAge1(2002,2021.5)

// const calcAge2 = function (birthYear, currentYear) {
//   return currentYear - birthYear;
// }
// console.log(
//     calcAge2(prompt(`give uor birth year `), prompt(`give uor current year `))
//     );

// const calcAge3 = birthyear => 3434-birthyear
// console.log(calcAge3(2000))

// const retirement = (birthYear,currentYear) => {
// const age  =  currentYear - birthYear
// const retire = 65 - age
// return retire
// }
// console.log(
//   retirement(prompt(`enter ur birth year`), prompt(`enter current year`))
// );

// function  cutFruitPieces (fruit){
//     return fruit * 4

// }

//  function fruitProcessor (apple, oranges){
//     const applePieces = cutFruitPieces(apple);
//     const orangePieces = cutFruitPieces(oranges);
//     const juss =console.log( `juice with ${applePieces} apple and ${orangePieces} oranges`)
//     return juss
// }
// fruitProcessor(2,3)

// ................

// function fishPieces (fish){
//     return fish * 4

// }
// function fishPacket ( salmon,ills){
//     const salmonPieces = fishPieces(salmon);
//     const illsPieces = fishPieces(ills);

//     const packet = console.log(
//       `${salmonPieces} pieces of salmon and ${illsPieces} Pieces of ills fish`
//     );
// }

// fishPacket(5,12)

// const avgDolphin=(s1,s2,s3)=>{
//     return (s1+s2+s3)/3
// }

// const avgKoala = (s1, s2, s3) => {
//   return (s1 + s2 + s3) / 3;
// };

// const checkWinner = function (){
//     if(avgDolphin >= avgKoala*2){
//         let dol =console.log(`Dolphins wins (${avgDolphin}) vs (${avgKoala})`)
//         return dol
//     }else if(avgKoala>=avgDolphin*2){
// let koala=console.log(`Koala wins (${avgKoala}) vs (${avgDolphin})`)
// return koala
//     }
// }
// avgDolphin(44,23,71);
// avgKoala(65,54,49);
// checkWinner()

// .................

// debugger
// const calcAverage = (a,b,c)=>(a+ b+ c)/3
// const scoreDolphin = calcAverage(1123, 34, 27);
// const scoreKoala = calcAverage(1123, 34, 27);

// const checkWinner = function (avgDolphin, avgKoala){
//     if (avgDolphin >= 2 * avgKoala) {
//       console.log(`Dolphins wins (${avgDolphin}) vs (${avgKoala})`);
//     } else if (avgKoala >= 2 * avgDolphin) {
//       console.log(`Koala wins (${avgKoala}) vs (${avgDolphin})`);
//     } else {
//       console.log(`no one wins`);
//     }
// }

// checkWinner(scoreDolphin,scoreKoala)

// const calcTip=function(bill){
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

//     }

// calcTip(125)
// const bill = [125,555,44]
// const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
// const total = [tip[0] + bill[0], tip[1] + bill[1], tip[2] + bill[2]];

// console.log(tip);
// console.log(total);

/* const aladin = {
  fName : `aladin `,
  lName:`mf`,
  age :`19`,
friend:[`shahid`,`refat`,`sufian`]
} */
// aladin.location = `bangladesh`;
// aladin[`facebook`] = `umar solomon`;
/* console.log(aladin.age)
console.log(aladin[`l` + `Name`]);
console.log(aladin[`f` + `Name`]);
console.log(aladin)
  */

// const interested = prompt(`what do u wanna know ?`)
// if (aladin[interested]){
// console.log(aladin[interested]);

// }else{
//   console.log(`pls enrte rvab nkvmo`)
// }

// console.log(` ${aladin.fName} has ${aladin.friend.length} friends .and ${aladin.friend[0]} is best`)

// const aladin = {
//   fName: `aladin `,
//   lName: `mf`,
//   birthYear:2002,
//   job:`student`,
//   friend: [`shahid`, `refat`, `sufian`],
//   hasDriverLicense: false,
//   calcAge: function (){
//     this.age=2021-this.birthYear
//     return this.age
//   },
//   getSummary : function(){
//     return `${this.fName} is a ${this.calcAge()} years old ${
//       this.job
//     }, and he has ${
//       this.hasDriverLicense? `a` : `no`
//     } driver license `;
//   }
// };
// console.log(aladin.getSummary());

// ===============

// const mark = {
//   name: `mark miller`,
//   mass: 78,
//   height: 1.69,
//   calcBmi:function(){
//     return this.bmi = this.mass/this.height**2
//   }
// };
// const john = {
//   name: `john smith`,
//   mass: 92,
//   height: 1.95,
//   calcBmi: function () {
//     return this.bmi = this.mass / this.height ** 2;
//   },
// };

//  if (mark.calcBmi()>john.calcBmi()) {
//    console.log(
//      `Marks bmi ${mark.calcBmi()} is higher than Johns bmi ${john.calcBmi()}`
//    );
//  }else{
//     console.log(
//       `Johns bmi ${john.calcBmi()} is higher than Marks bmi ${mark.calcBmi()}}`
//     );
//  }

// ===============

// for (let rep = 1; rep <= 10; rep++) {

//     console.log(`lifting weight repetition ${rep} 🏋️‍♀️`)
// }

// ====================
// let umar =[
//   `solomoon`,
//   `refat`,
//   `shahid`,
//   `sufian`,
//   `badaima`,
//   23,45,[34,454,5665,65,6]
// ]

// const types=[]
// for(let i =0; i<umar.length;i++){
// //  console.log(umar[i], typeof umar[i]);
//   //types[i]=typeof umar[i]
// types.push(typeof umar[i])
// }
// console.log(types)


// const years = [1991,2000,2002,2014,2011]
// const age=[]
// for(let i =0; i<years.length;i++){
// age.push(2021 - years[i])
// }
// console.log(age)


// for(let i =0; i<umar.length;i++){
//   if (typeof umar[i] !== `string`) continue
// console.log(umar[i]);

// }


// =================

// let umar =[
//   `solomoon`,
//   `refat`,
//   `shahid`,
//   `sufian`,
//   `badaima`,
//   23,45,[34,454,5665,65,6]
// ]


// for (let i = umar.length-1; i >= 0; i--){
//   console.log(umar[i])
// }


// for ( let exe=1; exe <4;exe++){
//   console.log(  `-------start exercise ${exe}`)
// for (let rep = 1; rep <= 10; rep++) {

//     console.log(`lifting weight repetition ${rep} 🏋️‍♀️`)
// }
// }





  const calcTip=function(bill){
return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

}

const bills= [22,295,176,440,37,105,10,1100,86,52]
const tips = [];
const total = [];

for(let i = 0; i<bills.length;i++){
  const tip =calcTip(bills[i])
  tips.push(tip);
  total.push(tips[i]+bills[i]);
}


console.log(bills,tips,total)


const calcAverage = function (arr){
  let sum =0
  for(let i = 0;i<arr.length;i++){
    sum+=arr[i]
  }

return sum/arr.length
}
console.log( calcAverage([1,2,3,4,5]))