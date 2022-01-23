let a = 1;
let b = -8;
let c = 2;
let D = b * b - 4 * a * c;
let number1;
let number2;

if (D > 0) {
    number1 = (-b + Math.sqrt(D)) / (2 * a);
    number2 = (-b - Math.sqrt(D)) / (2 * a);

console.log (`Дискриминант равен: ${D}`);
console.log (`Корни уравнения: ${number2}, ${number2}`);

} else if (D === 0) {
    number2 = number2 = -b / (2 * a);

console.log (`Дискриминант равен: ${D}`);
console.log (`Корень уравнения повторяется и равен: ${(number2 + number2) / 2}`);

} else {
console.log ('В уравнении нет корней');
} 