"use strict"

let bulletNumber = 7;
let shotsFired = 5;

if (bulletNumber > 7) {
  console.log('ошибка');
} else if(shotsFired > 7){
  console.log('ошибка');
} else if(bulletNumber === 0) {
  console.log('ошибка');
} else if(shotsFired === 0) {
  console.log('ошибка');
} else {

for(let i = 1; i <= shotsFired; i++){

  console.log(i);
  if (bulletNumber === i){
    console.log('бах', 'игрок погиб');
    break;
} else {
  if(shotsFired === i){
  console.log('щёлк', 'игрок выжил');
} else {
  console.log('щёлк');
}
}}}
