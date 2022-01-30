'use strict'

const letter = prompt("Enter letter")
const string = prompt('Enter string')

const finder = (char , string) => {
    console.log(char + ' ; String: ' + string)
    let res = ''
    for( let i = 0; i < string.length; i++){
        if(string[i] === char || string[i].toUpperCase() === char.toUpperCase() && string[i+1].match(/[a-zA-Z]/i)){
            console.log(string[i + 1])
            res+= string[i+1]
        }
    }
    alert(res)

}

finder(letter, string)