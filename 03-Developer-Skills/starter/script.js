// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const mKelvin = function(){
// const m ={
//     type:'temp',
//     unit:`celsius`,
//     value:33

// }
// const kelvin= m.value+273
// return kelvin
// }
// console.log(mKelvin());



const arr = [17,21,23]
const printForecast = function(arr){
    let str = ` `
    for(let i =0;i<arr.length;i++){
        str+=`${arr[i]}*C in ${1+i} days... `
    }
    console.log(`.....`+str);
    
}
printForecast(arr)