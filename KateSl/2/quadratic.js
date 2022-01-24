"use strict"

//x2+2x+17=0
//x2+6x+9=0
//x2+2x-3=0

let a = 1;
let b = 2;
let c = -3;
let D = b * b - 4 * a * c;


if (D < 0) {
    console.log("у уравнения нет действительных корней");
} else if(D === 0) {
    let x = -b / 2 * a;
    console.log("корень уравнения повторяется и равен: x =" + x);
} else if(D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    console.log("корни уравнения: x1 =" + x1 +", x2 =" + x2);
}




