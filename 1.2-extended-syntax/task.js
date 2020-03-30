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

function getAverageMark(marks) {
  let marksSum = 0, averageMark;  
  
  if (marks.length === 0) {
    averageMark = 0;
    console.log("Оценок не найдено");
  }
  else if (marks.length > 5) {
    marks = marks.slice(0,5);
    console.log("Более 5 оценок. Определено среднее для первых 5");

 for (let i = 0; i < marks.length; i++) {
     marksSum += marks[i];   
  }
  averageMark = marksSum / marks.length;
  }
  
 return averageMark;
}

function askDrink(name,dateOfBirthday) {
  let message,  age = new Date().getFullYear() - dateOfBirthday.getFullYear();
  if (age < 18) {
    message = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  } else {
    message = `Не желаете ли олд-фэшн, ${name}?`;
  }
  return message;
}