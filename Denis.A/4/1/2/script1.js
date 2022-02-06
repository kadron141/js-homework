"use strict"
const array1 = [];
const array2 = [];
let result = 0;
function checkExam(array1, array2) {


    for (let i = 0; i < array1.length; i++){
    if (array2[i] == "") {
        continue;
    }else if(array2[i] === array1[i]){
        result += 4;
    }else if(array2[i] !== array1[i]){
        result -= 1;
    }
}
    if(result < 0){
        return 0;
    }
    console.log(result)
    
}
checkExam(['a','a','a'], ['a','a','s']);


