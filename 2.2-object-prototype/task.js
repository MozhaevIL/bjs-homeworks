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
    let marksSum = 0, average, roundedAverage;  

   for (let i = 0; i < marks.length; i++) {
       marksSum += marks[i];   
    }
    average = marksSum / marks.length;
    roundedAverage = math.round(average);
    
   return roundedAverage;
  
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}