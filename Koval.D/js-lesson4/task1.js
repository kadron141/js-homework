let str = "How can mirrors be real if our eyes aren't real";

let arr = str.split(' ');

let strToUpperCase = '';

for (let i = 0; i < arr.length; i++) {
   strToUpperCase += arr[i][0].toUpperCase() + arr[i].slice(1) + ' ';
}

console.log (strToUpperCase);
