"use strict"

const a = 1;
const b = -5;
const c = -7;

let d = (b**2)-(4*a*c);

if (d < 0){ 
    console.log('у уравнения нет корней');
} else {
    if (d === 0){
    let x = -b / (2*a);
    console.log('корень уравнения повторяется и равен:' + x);
} else {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log('корни уравнения: х1 = ' + x1 + ` ` + 'х2 =' + x2);
}
}