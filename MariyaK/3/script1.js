"use strict"

// Дана строка из двух слов, разделённых пробелом. 
// Нужно вернуть строку, в которой первые буквы слов будут поменяны местами. 
// Пример: 

// “not picking” ->  “pot nicking”

let string = prompt ("Введите два слова");

function changeLetters () {
    let i = string.indexOf(" ");
    let result = " ";

    if (i === -1) {
        alert("Введите два слова!!!")
    } else {
        result = string[i + 1] + string.slice(1, i) + " " + string[0] + string.slice(i + 2);
        alert (result);
    }
}

changeLetters ();

