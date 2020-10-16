"use strict"

let newArr=[];
function matrix (arr){
  
  
  for(let znach of arr){

    if (Array.isArray(znach)) {
      matrix(znach);

    }
    else{
      newArr.push(znach);
    }
  }
return newArr;
}

let first = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

 console.log(matrix(first));
