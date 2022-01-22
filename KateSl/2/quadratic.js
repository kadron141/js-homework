"use strict"

//x2+2x+17=0
//x2+6x+9=0
//x2+2x-3=0

let a = 1;
let b = 6;
let c = 9;
let D = (b * b) - (4 * a * c);
let base = 2 * a;
let sD = Math.sqrt(D);


if (D < 0) 
    {
    console.log("у уравнения нет действительных корней");
    } 
if(D === 0) 
    {
    let x = -b / base;
    console.log("корень уравнения повторяется и равен: x =" + x);
    } 
if (D > 0) 
    {
    let x1 = ((-b + sD) / base);
    let x2 = ((-b - sD) / base);
    console.log("корни уравнения: x1 =" + x1 +", x2 =" + x2);
    }




