let range = 6;
let sum = 0;
let str = '0';

if (range < 0) {
   str = range + '<0';
} else if (range === 0) {
   str = range + '=0';
} else {
for (let i = 1; i <= range; i++) {
      str += ' + ' + i;
      sum += i;
}
str += ' = ' + sum;
}

console.log(str);