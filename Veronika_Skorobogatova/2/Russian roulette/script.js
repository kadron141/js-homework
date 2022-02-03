"use strict"
let bulletNumber = 7;
let shotsFired = 5;

if (bulletNumber>7 || shotsFired>7) {
   console.log("Ошибка!")
} else {
   for (let i = 1; i <= shotsFired; i++) {
      if (i !=bulletNumber ) {
         console.log("Щёлк!");
      } else {
         console.log("Бах!");
         break;
      }     
   }
   if (bulletNumber <= shotsFired) {
      console.log("игрок не выжил!");
   } else {
      console.log("игрок выжил!");
   }
}
