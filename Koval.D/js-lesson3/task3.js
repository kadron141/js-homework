function cubeSum (n, m) {
   let qubeSum = 0;

   for (let i = Math.min(n, m) + 1; i <= Math.max(n, m); i++) {
      qubeSum += i ** 3;
   }

return qubeSum;
}

console.log (cubeSum (4, 3));