"use strict"

//Your task is to write a function which returns the sum of following series upto nth term(parameter).
//Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...


function getSeriesSum(n){
    let result = 0;
    
    for(let i = 0; i < n; i++) {
        if(n === 0) {
            return "0.00";
        } else if(n === 1){
            return "1.00";
        } else {
            result += 1 / (1 + i * 3);
        }
    }
    return result.toFixed(2);
}

console.log(getSeriesSum(5))