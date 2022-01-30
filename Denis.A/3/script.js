'use strict'

function detSum(a,b){
    let result = 0;
    if (a === b){
        return result;
    } else if(a > b){
        for (let i = b + 1; i <= a; i++){
            result += i**3;
        }

        return result;
    }else if(a < b) {
        for (let i = a + 1; i <= b; i++){
            result += i**3;
        }

        return result;
    }
} 
console.log(detSum(0,4))








