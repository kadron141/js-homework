"use strict"

//We want to generate a function that computes the series 
//starting from 0 and ending until the given number.
//> 6
//"0+1+2+3+4+5+6 = 21"


let number = prompt("Введите число");


function getSum(){
    let sum = 0;
    for(let i = 0; i <= number; i++){
        console.log(i);
        sum += i;
    }
    return sum;    
}

console.log(getSum())

