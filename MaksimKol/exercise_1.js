let a = 1;
let b = -8;
let c = 2;
let D = b * b - 4 * a * c;
let Number1;
let Number2;

if (D > 0) {
    Number1 = (-b + Math.sqrt(D)) / (2 * a);
    Number2 = (-b - Math.sqrt(D)) / (2 * a);

console.log (`Дискриминант равен: ${D}`);
console.log (`Корни уравнения: ${Number2}, ${Number2}`);

} else if (D === 0) {
    Number2 = Number2 = -b / (2 * a);

console.log (`Дискриминант равен: ${D}`);
console.log (`Корень уравнения повторяется и равен: ${(Number2 + Number2) / 2}`);

} else {
console.log ('В уравнении нет корней');
} 