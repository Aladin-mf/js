'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//  const Hours= {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   }
// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//  
//   orderDelivery ({time,add,main,starter}){
   
//     console.log(`order will deliver to ${add} in ${time} with ${this.mainMenu[main]} & ${this.starterMenu[starter]}`);
    
//   }
// };
// let mal ={
//   time:`22:30`,
//   add: `votkago basay`,
//   main:2,
//   starter:2
// }
// let deha =restaurant.orderDelivery(mal)

// console.log(restaurant.orderDelivery);

// // const { name,openingHours, categories}=restaurant
// // console.log(name,openingHours,categories);
// // console.log(openingHours);
// // const {categories:menu,name:title,openingHours:time }=restaurant;
// // console.log(title);

// let a=111
// let b = 999
// const obj = {a:23,b:7,c:14}
// console.log();

// const {
//   openingHours}=restaurant
// console.log(openingHours);

// const {fri:{open:o,close:c}}=openingHours

// console.log(o,c);

// let arr = [1, 354, 65, 634];
// let es6arr = [`laden`,`umar`,`solomoon`,...arr];
// console.log(...es6arr);
// console.log(es6arr[6]);


// const menu = [...restaurant.starterMenu,...restaurant.mainMenu]
// console.log(menu);


// let lll =`laden`
// let lll2 = [...lll]
// console.log(...lll);


// let [newarr, fak,man,hola,...other] =[12,34,654,3343,432,4134,436,6,5654,7747,44] 
// console.log(other);
// console.log(hola);
// let d = [23,323,4,45]
// console.log(...d);

/* 

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1,players2] = game.players;
const [goalki1, ...feildPlayersOfTeam2] = players1;
const [goalki2, ...feildPlayersOfTeam1] = players2;
console.log(goalki1);
console.log(goalki2);
const allPlayers=[...players1,...players2]
console.log(allPlayers);

const subPlayerOfTeam1 =[`thiago`,`coutinho`,`perisic`]
const finalTeam1 = [...players1,...subPlayerOfTeam1]

const {team1:team1,x:draw,team2:team2}=game.odds
console.log(draw);

const printGoals = function (...players){
console.log(`${players.length} was scored`);

}
printGoals(...game.scored) */


/* 
const menu = [...restaurant.mainMenu,...restaurant.starterMenu]
 console.log(menu);
 for (const item of menu)
 console.log(item);
 
for (const [i,mal] of menu.entries()){
  console.log(`${i+1}:${mal}`);
 
}



console.log(restaurant.Hours?.mon?.open??`tor baper matha`);

let pro = Object.keys(Hours)
let opennn = `we are open on ${pro.length}: `
for ( let day of  pro){
opennn+=day+`,`


}

const value = Object.values(Hours)


const entries = Object.entries(Hours)
for(let [day,{open,close}] of entries){
  console.log(`we open our shop on ${day} at ${open} and close at ${close}`);
  
}

 */

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for(let [i,name] of game.scored.entries()){
//   console.log(`goal ${i+1} : ${name}`);
  
// }

// const odds =Object.values(game.odds)
// let oddAvg = 0
// for(let odd of odds)
  

// oddAvg += odd;
// oddAvg /= Object.values(game.odds).length;

// oddAvg;


// for (let [team , odd] of Object.entries(game.odds)){
//   const teamStr =team===`x`?`Draw`:`victory of ${game[team]}`
//   console.log(`${teamStr} ${odd}`);
  
// }
// const scorers = {};
// for (const player of game.scored) {
  //   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  
  // player
  // }
  // scorers
  
  

  
  
//   const set = new Set([`pasta`, `matha`, `dudh`, `dudh`,
// `matha`
// ]);
// console.log(set.has(`pasta`));
// console.log(set.add(`khasta`));
// console.log(set.delete(`pasta`));
//  for(let nSet of set)
// nSet


// const rest = new Map()




// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// openHours: {
//       thu: {
//         open: 12,
//         close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   orderDelivery({time,add,main,starter}){
// console.log(
//   `order will deliver to ${add} in ${time} with ${this.mainMenu[main]} & ${this.starterMenu[starter]}`
// );

//   },

// }
// restaurant.orderDelivery  ( {
//     time: `22:30`,
//     add: `votkago basay`,
//     main: 2,
//     starter: 2,
//   index:2
//   })

// const [st , nd]=restaurant.categories
// const nested= [2,4,[5,6]]
// const [i, ,j]=nested
// const [m,p,q=4564]=[i,j]



// const {name,categories,openHours}=restaurant




// let {menu=[`mal kha`],starterMenu}=restaurant


// const neMEnu=[...restaurant.mainMenu,`gnocci`]
// const mainMenu=[...restaurant.mainMenu,...restaurant.starterMenu]
// mainMenu



// let [madok,...mal]=[[`biri`,`cigarate`,`ganja`,`hiroine`],`bangla`,`english`,`var`]




// //.....challenge.....//
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };



// let [players1,players2]=[...game.players]
// let [goalki1, ...fieldPlayers1] = [...players1];
// let [goalki2, ...fieldPlayers2] = [...players2];
// let allPlayers=[...players1,...players2]
// let players1Final = [...players1, `thiago`, `coutinho`, `parisic`];
// let {team1,x:draw,team2}={...game.odds}

// let printGoals=function(...players){

// console.log(`${players} did ${players.length} goals`);

// }
// printGoals(...game.scored)



// //for of loop

//  const menue =[...restaurant.starterMenu,...restaurant.mainMenu]
//  for (const [i,menuItem] of menue.entries())console.log(`${i+1} : ${menuItem}`);
 


//  //optional chaining
//  console.log(restaurant.openHours.sat?.close??`nothing to show`);
 
//  for( const dayss of Object.keys(openHours)){
//    console.log(dayss);
   
//  }



// //challenge ...............



// for(const [i,player] of game.scored.entries())console.log(`  goal ${i+1} : ${player}`);

// let oddAvvrrr = 0;

// for (const oooddd of Object.values(game.odds)) {
//  oddAvvrrr+=oooddd
//  }
//  oddAvvrrr/=Object.values(game.odds).length
// oddAvvrrr


//   for (const [team,odd] of Object.entries(game.odds)){
//     const won=team===`x`?`draw `:`victory of ${game[team]} is `
//     console.log(`${won} ${odd}`);
    
//   }
// // }
// // const scorers = {};
// // for (const player of game.scored) {
//   //   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  
//   // player
//   // }
//   // scorers
  
  

  

//   let scores ={ }
//   for(let players of game.scored){
//     players
//     scores[players]?scores[players]++:(scores[players]=1)
//   }
//   console.log(scores);









//   ///...set
//   let orderSet = new Set([
//     `pasta`,
//     `pasta`,
//     `pizza`,
//     `pizza`,
//     `pizza`,
//     `risotto`,
//   ]);
//   console.log(orderSet.size);
//   ///   map/../././..

//   const rest = new Map()
//   rest.set(`name`, `aladiner pasat lathi`);
//   rest.set(1, `shahid-nagar`);
//   rest.set(2, `farm-gate`);
//   rest
//     .set(`categories`, [`lattthhhi`, `ustha`, `muira`])
//     .set(`open`, `saradin`)
//     .set(`close`,` never ` )
//     .set(true, `i am open`)
//     .set(false, `i am no more`)
    
//     const time=15
//  console.log(   rest.get(time > rest.get(`open`) && time < rest.get(`close`)));
 
//  console.log(rest.has(`open`));

// console.log(rest.size);

// const que = new Map([
//   [`question`, `what is the best prog lang in the world?`],
//   [1, `c`],
//   [2, `java`],
//   [3, `javascript`],
//   [`correct`, 3],
//   [true, `correct`],
//   [false, `wrong`],
// ]);
// console.log(que);
// console.log(que.get(`question`));

// for(const [key,value] of que){
//   if(typeof key ===`number`)console.log(`Answer ${key}:${value}`);
  
// }
// let ans = Number(prompt(`what is the best prog lang in the world?`))
// console.log(que.get(que.get(`correct`) === ans));


// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// let events=[...new Set(gameEvents.values())]
// console.log(events);
// gameEvents.delete(64)
// console.log(gameEvents);


// for(let [key,value] of gameEvents){
 
//    key < 45
//      ? console.log(`[first half] ${key} : ${value} `)
//      : console.log(`[second half] ${key} : ${value} `);
 
// }




// const ckMidSit=function(sits){
// const seat=sits.slice(-1)
// if (seat === `B` || seat === `E`) {
// console.log(`it is middle seat`);

// }else{
// console.log(`it is side seat`);

// }
// }
// ckMidSit(`11B`);
// ckMidSit(`23C`);
// ckMidSit(`3E`);


// let mf=`Madafaka`
// mf.toLowerCase();
// console.log(mf[0].toLowerCase()+mf.slice(1).toUpperCase());


// let email = `ofof224467@gmailofof.com`;
// let loginEmail = `  OFof224467@gmail.com    `;
// let realEmail=loginEmail.toLowerCase().trim()
// console.log(realEmail);
// let replace=email.replace(/ofof/g,`ahah`)
// console.log(replace);



// const capitalizetion =function (name) {
//   const names = name.split(` `)
//   const boroNam=[]
// for(const n of names){
// boroNam.push(n.replace(n[0],n[0].toUpperCase()))
// }
// console.log(boroNam.join(` `));

// }
// capitalizetion(`aladin umar solomoom`)

// const masterCard = function (number) {
//   const str=number+` `
// const last = str.slice(-4)
// last
// return last.padStart(str.length,`*`)
  
// }
// console.log(masterCard(22446677));



// document.body.append(document.createElement(`textarea`));
// document.body.append(document.createElement(`button`));

// document.querySelector(`button`).addEventListener('click',function(){
//   let text=document.querySelector(`textarea`).value

  
//  const rows=text.split(`\n`)

//  console.log(rows);
//  for(const [i,row] of rows.entries()){
//   const [first,sec]= row.toLowerCase().trim().split(`_`)
//   const output=`${first}${sec.replace(sec[0],sec[0].toUpperCase())}`
//   console.log(`${output.padEnd(20)}${`🤬`.repeat(i+1 )}`);
  
//  }
// console.log(row);

// })

// let mf=`big madafaka` 
// console.log(mf.slice(3,8));

// let passe=`aLaDiN`
// let lowpass = passe.toLowerCase();
// let uppass = passe[0].toUpperCase()+lowpass.slice(1);
// let mail = `ofof2244676@gmail.com`;
// let logmail = `   OfOf2244676@Gmail.coM              `;
// const correctmail=logmail.toLowerCase().trim()
// console.log(correctmail);


document.body.append(document.createElement(`textarea`));
document.body.append(document.createElement(`button`));

document.querySelector(`button`).addEventListener('click',function(){
let text=document.querySelector(`textarea`).value.toLowerCase().split(`\n`)

for(let [i,n] of text.entries()){
  let [fast,sec]=n.trim().split(`_`)
  let output = `${fast}${sec.replace(sec[0], sec[0].toUpperCase())}`;
  console.log(`${output.padEnd(20)}${`☠    `.repeat(i+1)}`);
}

})
