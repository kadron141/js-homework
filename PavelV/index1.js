//Дана строка из двух слов, разделённых пробелом. Нужно вернуть строку, в которой первые буквы слов будут поменяны местами. Пример: 

//“not picking” ->  “pot nicking”



"use strict"

let string = "not picking";
let i = string.indexOf(" ");
let newString = "";

function changeLetters(string) {
    if (!string) {
        return string;
    } 
    return newString = string[i + 1] + string.slice(1, i) + " " + string[0] + string.slice(i + 2);
}

console.log(changeLetters("not picking"));