'use strict'

let string = prompt()
    

const transformString = (string) => {
    let key = string.indexOf(' ');
    if(key !== -1) {
        alert(string[key + 1] + string.slice(1, key) + ' ' + string[0] + string.slice(key+2))
    }
}
transformString(string);