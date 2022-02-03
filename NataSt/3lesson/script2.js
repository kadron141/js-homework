"use strict"

// Дана строка и буква. Нужно вернуть строку, которая будет содержать все символы, 
// следующие за заданной буквой. 
// Примеры:

// If letter = 'r':
// comes_after("are you really learning Ruby?") # => "eenu"
// comes_after("Katy Perry is on the radio!")   # => "rya"
// comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
// comes_after("r8 your friend")                # => "i"

function getString (letter, str) {
    let res = '';
    for (let i = 0; i < str.length - 1; i++) {
        if ((str[i] === letter || str[i] === letter.toUpperCase()) && str[i+1].match(/[a-z]/i)) {
            res += str[i+1];
        }
    }
    return res;
}

console.log(getString('r', "Katy Perry is on the radior"));