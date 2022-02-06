"use strict"
let bulletNumber = 6; //в каком гнезде пуля

let shotsFired = 3; //количество выстрелов

if(bulletNumber > 7 || shotsFired > 7){
    console.log('Ошибка!!!');
    }else{
        
        for (let i =1; i <= shotsFired; i++){

            if (i !== bulletNumber) {

            console.log('щёлк');
                } else {
                    console.log('бах!');
                }
                break;
                
        }
        if (bulletNumber <= shotsFired) {
                    console.log('игрок не выжил');
                } else {
                    console.log('игрок выжил');
                }
            }