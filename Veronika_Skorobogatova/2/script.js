"use strict"
//ax^2 + bc + c = 0;

let a = 1;
let b = -6;
let c = 9;

   if (a===0) {
      console.log("Недопустимое значение коэффициента а."); 
   } else {
      let D = Math.pow(b, 2) - 4 * a * c;
      let x1;
      let x2;
      if (D>0) {
         x1 = (-b + Math.sqrt(D)) / (2*a);
         x2 = (-b - Math.sqrt(D)) / (2*a);
         console.log("корни уравнения: х1=" + x1 + ", x2=" + x2)
      } else if(D===0) {
         x1 = -b / (2 * a);
         console.log("корень уравнения повторяется и равен " + x1)
      } else if (D<0) {
         console.log("у уравнения нет корней")
      }
   }
