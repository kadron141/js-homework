"use strict"


const saveButton = document.getElementById('fide');

saveButton.onclick = () =>{
    let aValue = document.getElementById('cf-a').value;
    let bValue = document.getElementById('cf-b').value;
    let cValue = document.getElementById('cf-c').value;


    console.log(aValue,bValue,cValue)
    if(!aValue.length || !bValue.length || !cValue.length){
        alert('заполните все поля!')
    } else{
        if(Number.isNaN(+aValue)|| Number.isNaN(+bValue) || Number.isNaN(+cValue)){
            alert('введите числа')
        } else{
            const a = +aValue;
            const b = +bValue;
            const c = +cValue;
            print(`ваше уравнение: ${a}X^2 + ${b}X + ${c}`)
            const result = getRoots (a, b, c)
            showResult(result)
        }
    }
} 

function showResult(result){
    if(!result){
        print('нет корней')
    }else if(Array.isArray(result)){
        print(`корни х1: ${result[0]}, X2:${result[1]}`)
    }else{
        print(`корeнь х: ${result}`)
    }
}

function getRoots (a,b,c){
    let disc = b **2 - 4 * a * c;


if(disc < 0) {
    return;

} else if (disc === 0){
    let x = -b  / 2 * a;
    return x;

    } else if(disc > 0){
        let x1 = (-b + Math.sqrt(disc)) / (2 * a);
        let x2 = (-b - Math.sqrt(disc)) / (2 * a);
        return [x1,x2];
    }
}getRoots(1,2,3)
function print(string){
    const div = document.createElement('div');
    div.className = 'message';
    div.append(document.createTextNode(string));
    document.body.append(div);
}