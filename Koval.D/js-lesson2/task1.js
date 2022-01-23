let a = 1;
let b = -8;
let c = 2;
let root1;
let root2;
let D = b * b - 4 * a * c;

if (D > 0) {
root1 = (-b + Math.sqrt(D)) / (2 * a);
root2 = (-b - Math.sqrt(D)) / (2 * a);
console.log (`Дискриминант равен: ${D}`);
console.log (`Корни уравнения: ${root1}, ${root2}`);
} else if (D === 0) {
root1 = root2 = -b / (2 * a);
console.log (`Дискриминант равен: ${D}`);
console.log (`Корень уравнения повторяется и равен: ${(root1 + root2) / 2}`);
} else {
console.log ('У уравнения нет корней');
}