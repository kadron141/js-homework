function cubeSum (n, m) {
   let qubeSum = 0;

   if (n > m) {
      for ( let i = m + 1; i <= n; i++) {
         qubeSum += i * i * i;
      }
   } else {
      for (let i = n + 1; i <= m; i++) {
         qubeSum += i * i * i;
      }
   }

return qubeSum;
}

console.log (cubeSum (14, 17));