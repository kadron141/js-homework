'use strict'

let bulletNum = 4;
let shotsFired = 3;
let death = false

function result() {
    if(death){
        console.log('игрок умер')
    }else {
        alert( 'игрок выжил')
    }
}

function shot(){
    document.getElementById('button').style.display = 'none'
    document.getElementById('main').classList.add('spinner-3')
    setTimeout(() => {
        if( shotsFired < 7 && bulletNum < 7){
            for(let i = 1; i <= shotsFired; i ++){
                let a = Math.floor(Math.random() * ( 7 - 1)) + 1
                if ( a === bulletNum){
                    alert('Выстрел')
                    alert('Игрок умер')
                    document.getElementById('button').style.display = 'block'
                    document.getElementById('main').classList.remove('spinner-3')
                    return
                }else {
                    alert('промах')
            }
            }
            result()
        }else {
            console.log('error');
        }
        document.getElementById('button').style.display = 'block'
        document.getElementById('main').classList.remove('spinner-3')
    }, 2000)
    
    
}