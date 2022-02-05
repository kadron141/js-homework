const rightAnswers = [];
const studentAnswers = [];
let result = 0;

function checkExam(rightAnswers, studentAnswers) {
for (let i = 0; i < (rightAnswers).length; i++) {
   if (studentAnswers[i] == "") {
      continue;
   } else if (rightAnswers[i] === studentAnswers[i]) {
      result += 4;
   } else if (rightAnswers[i] !== studentAnswers[i]) {
      result -= 1;
   }
}

if (result < 0) {
   result = 0;
}

console.log(result);
}

checkExam (["a", "a", "b", "c"], ["a", "a", "b", "c"]);