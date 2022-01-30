"use strict"

//Дана строка и буква. Нужно вернуть строку, 
//которая будет содержать все символы, следующие за заданной буквой. 
//Примеры:
//If letter = 'r':
//comes_after("are you really learning Ruby?") # => "eenu"
//comes_after("Katy Perry is on the radio!")   # => "rya"
//comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
//comes_after("r8 your friend")                # => "i"

let result = "";

function getString(letter, string) {
    for(let i = 0; i < string.length; i++) {
        if(letter === string[i] || letter.toUpperCase() === string[i]) {
            result += string[i+1];
        }
    }
    return result;
}

console.log(getString("r", "are you really learning Ruby?"))
