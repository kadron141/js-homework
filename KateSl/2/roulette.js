"use strict"

let bulletNumber = 4;
let shotsFired = 5;

if (bulletNumber > 7 || shotsFired > 7) {
    console.log('Ошибка'); 
} else if (bulletNumber === shotsFired) {
    console.log('бах!');
    console.log('игрок не выжил');
} else {
    console.log('щёлк');
    console.log('игрок выжил');
}