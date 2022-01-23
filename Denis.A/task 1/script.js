"use strict"
const FOUR = 4;
let a = 2032434;
let b = 2342414;
let c = 143252;
let sum = FOUR * a * c;
let disc = b **2 - sum;
let x1 = (-b + Math.sqrt(disc)) / (2 * a);
let x2 = (-b - Math.sqrt(disc)) / (2 * a);

if(disc == 0) {
    console.log('корень уравнения повторяется и равен' + ' ' + `${x1}`);
} else if (disc < 0){
        console.log('у уравнения нет корней')

    } else{
        console.log('корни уравнения:' + ' ' + 'x1=' + ' ' + `${x1}` + ',' + 'x2=' + ' ' + `${x2}`)
    }
    