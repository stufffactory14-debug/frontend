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


const person={
    name:"rohit",
    age:22,
    city:"delhi",
    intro:function(){
        console.log(`hey my name is ${this.name}, i am ${this.age} years old and i live in ${this.city}.`);
    }
};
console.log(person.name);
console.log(person.age);
person.intro();

//. direct same key search krta h futher more bracket notation ham third varibale ke through access kr skte hai
const hisage="age";
console.log(person[hisage]);

person.games=["cricket","chess","football"];
console.log(person);

//practice 
person.who=function(){
    console.log(`i am ${this.name} from ${this.city} and i was born in ${2025-this.age}`);
};
console.log(person);
person.who();


//delete property
delete person.city;
console.log(person);

//red paramter , destructuring , spread operator
const fruit=["apple","banana","mango","grapes"];
const [firstFruit, , secondFruit] = fruit;
console.log(firstFruit);
console.log(secondFruit);

//practice
const number1=[1,2,3,4,5,6,7,8,9];
const [,second, , ,fifth]=number1;
console.log(second,fifth);
