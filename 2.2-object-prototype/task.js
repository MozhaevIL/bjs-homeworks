'use strict'

function getAnimalSound(animal) {
    if(animal) {
        let sound = animal.sound;
        return sound;;
    } else {
        return null;
    }
}

function getAverageMark(marks) {
    let marksSum = 0, marksInt = [], average, roundedAverage;  
    
    if (marks.length === 0) {
        console.log("Оценок не найдено");
        return 0;
      }
  
   for (let i = 0; i < marks.length; i++) {
       marksInt[i] = parseInt(marks[i]);
       marksSum += marksInt[i];   
    }
    average = marksSum / marks.length;
    roundedAverage = Math.round(average);
    
   return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}