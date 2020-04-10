//Задача 1
class Weapon {
    constructor(weaponObject) {
        this.name = weaponObject.name;
        this.attack = weaponObject.attack;
        this.initialDurability = weaponObject.durability;
        this.durability = this.initialDurability;
        this.range = weaponObject.range;
    }
    
    isBroken() {
        if (this.durability > 0) {
            return false;
        } else {
            return true;
        }
    }

    takeDamage(damage) {
        if (this.durability > damage) {
            this.durability -= damage;
            console.log(`Прочность оружия ${this.name} снижена на ${damage}. Новая прочность - ${this.durability}`);
          
        } else {
            console.log(`Оружие ${this.name} сломалось, получив урон ${damage} при прочности ${this.durability}`);
            this.durability = 0;
        }
      return this.durability;
    }

    getDamage() {
        if (this.durability >= this.initialDurability * 0.3) {
            console.log(`Оружие ${this.name} в превосходном состоянии наносит урон ${this.attack}`);
            return this.attack;
        } else if ((this.durability < this.initialDurability * 0.3) && (this.durability > 0)) {
            console.log(`Оружие ${this.name} в плохом состоянии наносит урон ${this.attack / 2}`);
            return this.attack / 2;
        } else {
            console.log(`Оружие ${this.name} сломано и не наносит урона`);
            return 0;
        }
    }
}

const arm = new Weapon({
    name:"Рука",
    attack: 1,
    durability: Infinity,
    range: 1
});

const bow = new Weapon({
    name:"Лук",
    attack: 10,
    durability: 200,
    range: 3
});

const sword = new Weapon({
    name:"Меч",
    attack: 25,
    durability: 500,
    range: 1
});

const staff = new Weapon({
    name:"Посох",
    attack: 8,
    durability: 300,
    range: 2
});

const knife = new Weapon({
    name:"Нож",
    attack: 5,
    durability: 300,
    range: 1
});

const longbow = new Weapon({
    name:"Длинный лук",
    attack: 15,
    durability: 200,
    range: 4
});

const axe = new Weapon({
    name:"Секира",
    attack: 27,
    durability: 500,
    range: 1
});

const stormStaff = new Weapon({
    name:"Посох Бури",
    attack: 10,
    durability: 300,
    range: 3
});


//Задача 2

class Arm extends Weapon {
    constructor() {
        super(arm);
    }
}

class Bow extends Weapon {
    constructor() {
        super(bow);
    }
}

class Sword extends Weapon {
    constructor() {
        super(sword);
    }
}

class Staff extends Weapon {
    constructor() {
        super(staff);
    }
}

class Knife extends Weapon {
    constructor() {
        }
}

class LongBow extends Bow {
    constructor() {
        super();
        this.name = "Длинный лук";
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends Sword {
    constructor() {
        super();
        this.name = "Секира";
        this.attack = 27;
        this.initialDurability = 800;
        this.durability = this.initialDurability;
    }
}

class StormStaff extends Staff {
    constructor() {
        super();
        this.name = "Посох Бури";
        this.attack = 10;
        this.range = 3;
    }
}

//задача 3
class StudentLog {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
              
        if(this.marks.hasOwnProperty(subject) === false) {
            this.marks[subject] = [];
        };
        if ((Number.isInteger(grade) === false) || (grade > 5 ) || (grade < 1)) {
            console.log(`Недопустимая оценка "${grade}". Поставьте оценку от 1 до 5`);
            return this.marks[subject].length;
        }
        this.marks[subject].push(grade);
        return this.marks[subject].length;
    }

    getAverageBySubject(subject) {
        let marksSum = 0, averageMark;
        if ((this.marks.hasOwnProperty(subject) === false) ||(this.marks[subject].length === 0)) {
          averageMark = 0;
          console.log(`По предмету ${subject} нет оценок`);
          return averageMark;
        }

        for (let i = 0; i < this.marks[subject].length; i++) {
        marksSum += this.marks[subject][i];   
         }
         averageMark = marksSum / this.marks[subject].length;
         console.log(`Средняя оценка по предмету ${subject} - ${averageMark}`);
         return averageMark;
    }

    getTotalAverage() {
        let totalMarksSum = 0, subjectNumber = 0, totalAverageScore;
        for (let prop in this.marks ) {
          totalMarksSum += this.getAverageBySubject(prop);
          subjectNumber ++;
        }
        totalAverageScore = totalMarksSum / subjectNumber;
        if (totalMarksSum === 0) {
            console.log(`Оценок не найдено`);
            return totalAverageScore = 0;
        }
        console.log(`Средняя оценка по всем предметам - ${totalAverageScore}`);
        return totalAverageScore;
    }
}
