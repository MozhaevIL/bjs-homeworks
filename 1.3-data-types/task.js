"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {

 let months = Math.round((date.getTime() - new Date().getTime()) / (1000 * 3600 * 24 * 30));

  if (isNaN(percent) === true) {
     alert(`Параметр "процентная ставка" содержит неправильное значение ${percent}`);
     } else {
     percent = Number(percent);
    }

  if (isNaN(contribution) === true) {
     alert(`Параметр "начальный взнос" содержит неправильное значение ${contribution}`);
     } else {
     contribution = Number(contribution);
    }
   
   if (isNaN(amount) === true) {
     alert(`Параметр "общая стоимость" содержит неправильное значение ${amount}`);
     } else {
     amount = Number(amount);
    }

 let credit = amount - contribution;
 let monthlyPercentDecimal = percent / (100 * 12);
 let monthlyPayment = credit * (monthlyPercentDecimal + monthlyPercentDecimal/(((1 + monthlyPercentDecimal) ** months) -1));
 let totalAmount = Number((monthlyPayment * months).toFixed(2));
 
 console.log(totalAmount);
 return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}