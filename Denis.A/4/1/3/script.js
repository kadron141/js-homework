"use strict"
function SequenceSum(number){
    let result = 0;
    for(let i = 0; i <= number; i++)
    if(number > 0){
        result += i;
    }else if(number === 0){
        result = 0;
    }else if(number < 0){
        console.log(SequenceSum(number) < 0)
    }
    console.log(result)
}
SequenceSum(6)