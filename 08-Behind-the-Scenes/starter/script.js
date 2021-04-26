'use strict';
// /* const name = `aladin`

// function first(){

//     const age =20
//     if(age>=20){
//         const dec =2
//         var mill=true
//     }
//     function sec(){
//          const job = `teacher`
//          console.log(`${name} is a ${age} old ${job}`)
//          ;

//     }
//     sec()
    
// }
// first()
//  */
// /* 
// const aladin = {
//   year: 2002,
//   calcage: function () {
//     console.log(2021 - this.year);
//   },
//   fName:`laden`,
//   greet :function(){
//       console.log(`hey ${this.fName}`);
      
//   }
// };

// const paden = {
//   year: 2000,
  
// };


// aladin.greet() */

let lastName = `sheikh`;
let oldLastName = lastName;
lastName = `solomon`;
console.log(lastName,oldLastName);



const fima = {
    fName : `fima`,
    lName:`sheikh`,
    age : 18
}
const marriedFima = fima
marriedFima.lName= `rashed`
console.log(`beffr maarrige:`, fima);
console.log(`aftr maarrige:`, marriedFima);

const fima2 = {
    fName : `fima`,
    lName:`sheikh`,
    age : 18
}
const fimaCopy = Object.assign({},fima2)
fimaCopy.lName=`rashed`
console.log(`beffr maarrige:`, fima2);
console.log(`aftr maarrige:`, fimaCopy);
