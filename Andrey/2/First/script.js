"use strict"

const ratio = 4;

let a = 10;
let b = 55;
let c = 33;

let disc = b **2 - (ratio * a * c);



if (disc === 0) {
    console.log('Корень один единственный:' + ' ' + `${x}`);
    let x = (-b / (2 * a));
} else if (disc < 0) {
    console.log('Нет корней');
} else {
    let x1 = (-b + Math.sqrt(disc) / (2 * a));
    let x2 = (-b - Math.sqrt(disc) / (2 * a));
    console.log('Корни уравнения равны:' + ' ' + 'x1=' +  `${x1}` + ',' + ' ' + 'x2=' + `${x2}`);
}