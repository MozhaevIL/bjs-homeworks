'use strict'
//задача 1
function getSolutions(a,b,c) {
  let d = b ** 2 - 4 * a* c;
  if (d < 0) {
    return {
     "D": d,
     roots: []
    };
  } else if (d === 0) {
     let x1 = - b / (2 * a);
     return {
      "D": d,
      roots: [x1]
    };
  } else if (d > 0) {
      let x1 = (-b + Math.sqrt(d)) / (2 * a);
      let x2 = (-b - Math.sqrt(d)) / (2 * a);
      return {
        "D": d,
        roots: [x1, x2]
      };
  }
}

function showSolutionsMessage(a,b,c) {
    let result = getSolutions(a,b,c);
    alert(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    alert(`Значение дискриминанта: ${result["D"]}`);
    if (result["D"] < 0) {
        alert("Уравнение не имеет вещественных корней");
    } else if (result["D"] = 0) {
        alert(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        alert(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

//Задача 2
function getAverageScore(data) {
    let averageScore = new Object, averageMarks = [];
    
    for (let prop in data) {
        let marks = data[prop];
        averageScore[prop] =  getAverageMark(marks);
        averageMarks.push(averageScore[prop]);
    }
    averageScore.average = getAverageMark(averageMarks);
   return averageScore;
}


function getAverageMark(marks) {
    let marksSum = 0, averageMark;
    if (marks === 0) {
        averageMark = 0;
        console.log('Средняя оценка по предмету - 0');
        return averageMark;
    }           
    for (let i = 0; i < marks.length; i++) {
        marksSum += marks[i];   
     }
     averageMark = marksSum / marks.length;
     return averageMark;
}