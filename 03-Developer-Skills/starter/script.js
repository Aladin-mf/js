// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const mKelvin = function(){
const m ={
    type:'temp',
    unit:`celsius`,
    value:33

}
const kelvin= m.value+273
return kelvin
}
console.log(mKelvin());
