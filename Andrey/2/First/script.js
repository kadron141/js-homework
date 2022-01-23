"use strict"

const ratio = 4;

let a = 1;
let b = 3;
let c = 2;

let disc = b **2 - (ratio * a * c);



if (disc === 0) {
    let x = (-b / (2 * a));
    console.log('Корень один единственный:' + ' ' + `${x}`);
} else if (disc < 0) {
    console.log('Нет корней');
} else {
    let x1 = ((-b + Math.sqrt(disc)) / (2 * a));
    let x2 = ((-b - Math.sqrt(disc)) / (2 * a));
    console.log('Корни уравнения равны:' + ' ' + 'x1=' +  `${x1}` + ',' + ' ' + 'x2=' + `${x2}`);
}