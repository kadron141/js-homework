function gimme(array) {
   let changedArray = [];
   changedArray = array.slice(0);
   
   changedArray.sort((a, b) => { return a - b; });
   
return array.indexOf(changedArray[1]);
}

console.log(gimme ([500, -10, 0]));