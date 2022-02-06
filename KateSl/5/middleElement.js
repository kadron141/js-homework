"use strict"

//you need to create a function that when provided with a triplet, 
//returns the index of the numerical element that lies between the other two elements.
//The input to the function will be an array of three distinct numbers (Haskell: a tuple).
//For example:
//gimme([2, 3, 1]) => 0
//gimme([5, 10, 14]) => 1

let arr = [14, 5, 10];
let result = "";

function getMiddleElementIndex(arr){
    if((arr[1]<arr[0] && arr[0]<arr[2]) || (arr[2]<arr[0] && arr[0]<arr[1])){
        result = arr.indexOf(arr[0]);
    } else if((arr[0]<arr[1] && arr[1]<arr[2]) || (arr[2]<arr[1] && arr[1]<arr[0])){
        result = arr.indexOf(arr[1]);
    } else if((arr[0]<arr[2] && arr[2]<arr[1]) || (arr[1]<arr[2] && arr[2]<arr[0])){
        result = arr.indexOf(arr[2]);
    }
    return result;
}

console.log(getMiddleElementIndex(arr))
