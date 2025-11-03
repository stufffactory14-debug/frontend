//var can change or overwrite the variable without throughing error
var name = "alice";
var name = "rohit";
console.log(name);

const isOdd=(n)=> n&1==1?true:false;
console.log(isOdd(4));

let greet=(n)=> "hello "+n+" !";
console.log(greet("bhavya"));

let add=(a,b)=> a+b;
console.log(add(4,5));

//wrong
// const isEven=(n)=> n&1==1?true:false;
// console.log(isEven(4));

const number = [1,2,4];
const sqaure = number.map(num=> num*num);
console.log(number);
console.log(sqaure);

const b = "bhavya";
const age=21;
//template literal
console.log(`hi my name is ${b}
and
my age is ${age} and i was born in ${2025-age}`);


//practice of template literal
const user="aman";
const points=120;
console.log(`hey ${user} , you have ${points} points!`);

