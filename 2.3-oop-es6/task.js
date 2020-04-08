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
        super();
        this.name = "Рука";
        this.attack = 1;
        this.initialDurability = Infinity;
        this.durability = this.initialDurability;
        this.range = 1;
    }
}

class Bow extends Weapon {
    constructor() {
        super();
        this.name = "Лук";
        this.attack = 10;
        this.initialDurability = 200;
        this.durability = this.initialDurability;
        this.range = 3;
    }
}

class Sword extends Weapon {
    constructor() {
        super();
        this.name = "Меч";
        this.attack = 25;
        this.initialDurability = 500;
        this.durability = this.initialDurability;
        this.range = 1;
    }
}

class Staff extends Weapon {
    constructor() {
        super();
        this.name = "Посох";
        this.attack = 8;
        this.initialDurability = 300;
        this.durability = this.initialDurability;
        this.range = 2;
    }
}

class Knife extends Weapon {
    constructor() {
        super();
        this.name = "Нож";
        this.attack = 5;
        this.initialDurability = 300;
        this.durability = this.initialDurability;
        this.range = 1;
    }
}

class Longbow extends Bow {
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
