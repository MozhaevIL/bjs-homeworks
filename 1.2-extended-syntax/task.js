"use strict"
function getResult(a,b,c) {
  let d, x = [];
  d = b ** 2 - 4 * a * c;
  if (d === 0) {
   x[0] = - b / 2 * a;
     }
  else if (d > 0) {
    x[0] = (-b + d ** 0.5) / 2 * a;
    x[1] = (-b - d ** 0.5) / 2 * a;
   }   
   return x;
}

function getAverageMark(marks){
  let marksSum = 0, averageMark;  
  if (marks.lenght === 0) {
    averageMark = 0;
  }
  else if (marks.lenght > 5) {
    marks = marks.slice(0,5);
    for (let i = 0; i < marks.lenght; i++) {
      marksSum += marks[i];
    }
    averageMark = marksSum / marks.length;
  }
  else {
    for (let i = 0; i < marks.lenght; i++) {
      marksSum += marks[i];   
    }
    averageMark = marksSum / marks.length;
  }
  
 return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}