"use strict"

// Дана строка и буква. Нужно вернуть строку, 
// которая будет содержать все символы, следующие за заданной буквой. 
// Примеры:

// If letter = 'r':
// comes_after("are you really learning Ruby?") # => "eenu"
// comes_after("Katy Perry is on the radio!")   # => "rya"
// comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
// comes_after("r8 your friend")                # => "i"

let string = prompt("Введите выражение");
let letter = prompt("Введите букву");

function comesAfter () {
    let result = " ";

    for (let i = 0; i < string.length - 1; i++) {
        if ((string[i] === letter || string[i] === letter.toUpperCase()) && string[i + 1].match(/[a-z]/gi)) {
            result += string[i+1];
        }
    }
    
    alert(result);
}

comesAfter();