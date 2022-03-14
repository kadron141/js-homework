'use strict'

   let string = prompt('Enter two words separated by a space.');

function swapLetters() {
   let result = '';
   let i = string.indexOf(' ');
   
   if (i === -1) {
      alert('Incorrect data entry. Enter two words separated by a space.');
   } else {
      result = (string[i + 1] + string.slice(1, i) + ' ' + string[0] + string.slice(i + 2));
      alert(result)
   }
}

swapLetters(string);