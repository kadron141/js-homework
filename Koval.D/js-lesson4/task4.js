function term(parametr) {
   let sum = 0;
   let divider = 1;

   for (let i = 0; i < parametr; i++) {
   sum = sum + (1 / divider);
   divider += 3;
   }
   return sum.toFixed(2);
}

console.log(term(2));