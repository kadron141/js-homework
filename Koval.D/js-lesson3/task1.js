function reverseLetter () {
   let str = prompt ('Введите два слова через пробел');
   let result = '';
   let i = str.indexOf(' ');

   if (str.includes(' ')) {
   result = str[i + 1] + str.slice(1, i) + ' ' + str[0] + str.slice(i + 2);
   alert (result);
   } else {
   alert ('Введите два слова через пробел');
   }
}

reverseLetter ();