let letter = 'r';
let str = 'r8 your friend';
let result = '';

for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === letter || str[i] === letter.toUpperCase()) {

         if (str[i + 1].match('[A-z]') != null) {
            result += str[i + 1];
         }
      }
   }

console.log(result);