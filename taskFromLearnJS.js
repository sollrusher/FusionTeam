"use strict"

function UC(){
  function ucFirst(name){
    let newName;
    newName = name[0].toUpperCase()+name.slice(1);
    return newName}

console.log( ucFirst("вася"));
}
function SPAM(){
  function checkSpam(str){
    let newStr;
    newStr=str.toLowerCase();
    return newStr.includes('viagra') || newStr.includes('xxx')
  }

  console.log(checkSpam('buy ViAgRA now'));
  console.log(checkSpam('free xxxxx'));
  console.log(checkSpam("innocent rabbit"));
}
function USEC(){

  function truncate(str, ml){
    if(str.length > ml)return str.slice(0,ml-1)+'...'
    return str
  }

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));

}
function Ahuet(){
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator;

console.log( calc.calculate("3 + 7") );

calc.addMethod("*", (a, b) => a * b);
console.log( calc.calculate("5 * 8") );
}

function Arrays(){

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name)

console.log( names ); // Вася, Петя, Маша


let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item =>({fullName: `${item.name} ${item.surname}`, id: item.id}) )

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/
console.log( usersMapped);
console.log( usersMapped[0].id ); // 1
console.log( usersMapped[0].fullName );
}
function SI(){
let dida = {
  ot:1,
  do:10
};

dida[Symbol.iterator] = function () {
  return{
  current: this.ot,
  last: this.do,

    next(){
      if(this.current<=this.last){
        return{ 
          done: false,
          value: this.current++}
      }else {
        return {done:true}
      }
    }

}

}
for(let num of dida)
{console.log(num);}
}
function SET(){
let newarr=[];
function unique(arr) {
  let boba = new Set(arr);
  console.log(boba);
  for(let value of boba)
{
  newarr.push(value);
}
console.log(newarr);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

unique(values) ;
}
function ZARP(){
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
let sum=0;
function sumSalaries(obj){
  for(let zarp of Object.values(obj))
 {sum+=zarp}
 return sum
}

console.log( sumSalaries(salaries) );
}

function Recursion(){
let sum=0;
let i=0;
function sumTo(n) { 
  return (n > 1) ?  n+ sumTo(n - 1):n ;
  
}


console.log( sumTo(3) );
}
function List(){
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
function printList (list){
  console.log(list.value);
  list.next? printList(list.next) : console.log('vse')
}

function printListBack(list){
  if(list.next){ 
  printListBack(list.next) 
  }
   console.log(list.value)
}

printListBack(list);
}



function work(a, b) {
  console.log( a + b ); // произвольная функция или метод
}

function spy(func) {

  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }

  wrapper.calls = [];

  return wrapper;
}
work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}