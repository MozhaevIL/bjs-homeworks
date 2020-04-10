//Задача 1
function parseCount(inputNumber) {
    const itemsNumber = Number.parseInt(inputNumber);
    if (isNaN(itemsNumber) === true) {
        throw new Error("Невалидное значение");
    }
    return itemsNumber;
}

function validateCount(inputNumber) {
    try {
        parseCount(inputNumber);
    } catch (error) {
        return error;
    }
    return parseCount(inputNumber);
}

//Задача 2
class Triangle {
    constructor(a,b,c) {
        if((a >= b + c) || (b >= a + c) ||(c >= a + b)) {
          throw new Error("Треугольник с такими сторонами не существует");
        }
        
        this.a = a;
        this.b = b;
        this.c = c;
      }
    

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return s.toFixed(3);
    }
}

function getTriangle(a,b,c) {
    try {
        return new Triangle(a,b,c);
    } catch (error) {
        const wrongTriangle = {
            getArea() {
                return "Ошибка! Неправильный треугольник!";
            },
            getPerimeter() {
                return "Ошибка! Неправильный треугольник!";
            }
        }
        return wrongTriangle; 
        }
}