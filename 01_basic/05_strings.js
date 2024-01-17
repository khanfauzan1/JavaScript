const name= "fauzan"

const repoCount =50

// console.log(name+repoCount+ ' value');
// string interpolation

// console.log(`name ${name} and my repo count ${repoCount}`);

const gameName= new String('fauzan-fa')

// console.log(gameName[0]);  // f
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(name.length); // 6
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2));  // u 
// console.log(gameName.indexOf('u')); // 2

const newString=gameName.substring(0,4)  // (starting index , ending index)
// console.log(newString);

const anotherString = gameName.slice(-8,4)

// console.log(anotherString); // auz

const newStringOne = "  fauzan "
// console.log(newStringOne);
// console.log(newStringOne.trim());  // remove starting space end spac


const url = "https://fauzan.com/fauzan%20khan"
// console.log(url.replace('%20','-'));
// console.log(url.includes('fauzan')); // true

console.log(gameName.split('-'));
