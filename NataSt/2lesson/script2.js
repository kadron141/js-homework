"use strict"

/*
2. Написать программу “русская рулетка”
Переменные bulletNumber (в каком гнезде пуля) и shotsFired (кол-во выстрелов) 
задаются в коде (оба числа не должны быть выше 7, в противном случае выводим сообщение об ошибке). 
На каждую попытку выстрела должно выводиться сообщение “щёлк”, на успешный выстрел “бах!”. 
В конце должно вывестись сообщение “игрок выжил” / “игрок не выжил”
*/

let bulletNumber = 5,
    shotsFired = 4;

if (bulletNumber > 7 || shotsFired > 7) {
    console.log('Тебе бы научиться пользоваться револьвером, амиго!');
} else {
    
    let currentShot = 1;

    while (currentShot <= shotsFired) {
        if (currentShot === bulletNumber) {
            console.log('БАХ!');
            break;
        }
        console.log('Щёлк');
        currentShot++
    }

    if (bulletNumber > shotsFired) {
        console.log('Игрок выжил');
    } else {
        console.log('Игрок не выжил');
    }
}
