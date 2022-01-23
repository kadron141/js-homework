"use strict"


let bulletNumber = 5; //в каком гнезде пуля

let shotsFired = 1; //количество выстрелов

if(bulletNumber,shotsFired > 7){
    console.log('Ошибка!!!');
    }else{

        for (; shotsFired < bulletNumber ; shotsFired++){

            console.log('щелк' + shotsFired + ' ' + 'игрок выжил'); 
            
            }
            console.log('бах' + ' ' + 'игрок не выжил');
                
        }
