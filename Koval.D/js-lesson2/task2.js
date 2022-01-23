let bulletNumber = 4;
let shotsFired = 8;
let isDead = false;

if (bulletNumber > 7 || shotsFired > 7 || 
bulletNumber < 1 || shotsFired < 1) {
console.log('Введите число меьнше 7');
} else {
for (let i = 1; i <= shotsFired; i++) {
   if (i === bulletNumber) {
      console.log('БАХ!!!');
      isDead = true;
      break
   } else {
      console.log('Щелк');
   }
}

if (isDead) {
   console.log('Вы убиты');
} else {
   console.log('Вы выжили');
};
}