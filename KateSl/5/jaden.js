"use strict"

//Your task is to convert strings to how they would be written by Jaden Smith. 
//The strings are actual quotes from Jaden Smith, 
//but they are not capitalized in the same way he originally typed them.

//Example:
//Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
//Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


let string = "How can mirrors be real if our eyes aren't real";
let result = "";

function getNewString() {
    let spaceIndex;

    for(let i = 0; i < string.length; i++){
        if(string[i] === " ") {
            spaceIndex = i;
        }
    }

    for(let i = 0; i < string.length; i++) {
        if(i !== string[spaceIndex + 1]){
            result += string[i];
        } else {
            result += string[i + 1].toUpperCase();
        }
    }
    return result;
}

console.log(getNewString(string))
