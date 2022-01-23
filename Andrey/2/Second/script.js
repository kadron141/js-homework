"use strict"

let bulletNumber = 3;
let shotsFired = 4;
let death = false;

if (bulletNumber > 7 || shotsFired > 7) {
    console.log('Error');
} else {
    for (let i = 1; i <= shotsFired; i++) {
        if (i != bulletNumber) {
            console.log('Щёлк');
        } else {
            console.log('Бах')
            death = true;
            break;
        }
    }

    if (death) {
        console.log('Game over');
    } else {
        console.log('You are still not dead');
    }
}

