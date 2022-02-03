"use strict"

// 2. Написать программу “русская рулетка”
// Переменные bulletNumber (в каком гнезде пуля) и shotsFired (кол-во выстрелов) задаются в коде 
// (оба числа не должны быть выше 7, в противном случае выводим сообщение об ошибке). 
// На каждую попытку выстрела должно выводиться сообщение “щёлк”, на успешный выстрел “бах!”. 
// В конце должно вывестись сообщение “игрок выжил” / “игрок не выжил”

let bulletNumber = 5;
let shotsFired = 7;

if (bulletNumber > 7 || shotsFired > 7) {
    console.log('Ошибочка вышла');
} else {
    for (let shot = 1; shot <= shotsFired; shot++) {
        if (shot === bulletNumber) {
            console.log('бах!');
            break;
        }
        
        console.log('щёлк');
    }
}

if (bulletNumber > shotsFired) {
    console.log('игрок выжил')
} else {
    console.log('игрок не выжил')
}