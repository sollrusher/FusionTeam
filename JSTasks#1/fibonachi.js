"use strict"



let arr = [0, 1];
let current = 0;

function numbers(end){

  if(arr.length <= end){
    let n =arr.length;
     current=arr[n-1]+arr[n-2];

    arr.push(current)

    numbers(end)
  }
   else if(end<0 && arr.length <= -end){
    n=arr.length;
    current=arr[n-2]-arr[n-1];
    arr.push(current)
    numbers(end)
}
}

let end = 10;
numbers(end);
console.log(arr);