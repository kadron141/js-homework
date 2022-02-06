"use strict"


let string = "How can mirrors be real if our eyes aren't real"

const array = string.split(' ');

let result = '';

for (let i = 0; i < array.length; i++ ){
    result += array[i][0].toUpperCase() + array[i].slice(1) + ' ';
}

console.log(result)