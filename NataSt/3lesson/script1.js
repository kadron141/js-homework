"use strict"

// Дана строка из двух слов, разделённых пробелом. 
// Нужно вернуть строку, в которой первые буквы слов будут поменяны местами. 
// Пример: 
// “not picking” ->  “pot nicking”

function reverseLetter (str) {
    let space = str.indexOf(' ');
    return space !== -1 ? 
        str[space+1] + str.slice(1, space) + ' ' + str[0] + str.slice(space+2) : 
        'В строке всего одно слово';
}

console.log(reverseLetter('black cat'));