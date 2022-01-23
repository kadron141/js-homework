"use strict"

let bulletNumber = 4;
let shotsFired = 5;

if (bulletNumber > 7 || shotsFired > 7) {
    console.log('Ошибка'); 
} else {
    for (let i = 1; i < 7; i++) {
        if (i !== bulletNumber) {
            console.log('щёлк');
        } else {
                console.log('бах!');
                break;
        }
    }
    if (bulletNumber < shotsFired) {
        console.log('игрок не выжил');
    } else {
        console.log('игрок выжил');
    }
}

    
