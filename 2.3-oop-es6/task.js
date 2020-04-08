//Задача 1
class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.currentDurability = this.durability;
        this.range = range;
    }
    
    isBroken() {
        if (this.currentDurability > 0) {
            return false;
        } else {
            return true;
        }
    }

    takeDamage(damage) {
        if (this.currentDurability > damage) {
            this.currentDurability -= damage;
            console.log(`Прочность оружия ${this.name} снижена на ${damage}. Новая прочность - ${this.currentDurability}`);
          
        } else {
            console.log(`Оружие ${this.name} сломалось, получив урон ${damage} при прочности ${this.currentDurability}`);
            this.currentDurability = 0;
        }
      return this.currentDurability;
    }

    getDamage() {
        if (this.currentDurability >= this.durability * 0.3) {
            console.log(`Оружие ${this.name} в превосходном состоянии наносит урон ${this.attack}`);
            return this.attack;
        } else if ((this.currentDurability < this.durability * 0.3) && (this.currentDurability > 0)) {
            console.log(`Оружие ${this.name} в плохом состоянии наносит урон ${this.attack / 2}`);
            return this.attack / 2;
        } else {
            console.log(`Оружие ${this.name} сломано и не наносит урона`);
            return 0;
        }
    }
}

const arm = new Weapon("Рука", 1, Infinity, 1);
const bow = new Weapon("Лук", 10, 200, 3);
const sword = new Weapon("Меч", 25, 500, 1);
const staff = new Weapon("Посох", 8, 300, 2);
const knife = new Weapon("Нож", 5, 300, 1);

const longbow = new Weapon("Длинный лук", 15, 200, 4);
const axe = new Weapon("Секира", 27, 500, 1);
const stormStaff = new Weapon("Посох бури", 10, 300, 3);

//Задача 2
class Arm extends Weapon {
    constructor(name) {
        super(name);
        this.attack = 1;
        this.durability = Infinity;
        this.currentDurability = this.durability;
        this.range = 1;
    }
}

class Bow extends Weapon {
    constructor(name) {
        super(name);
        this.attack = 10;
        this.durability = 200;
        this.currentDurability = this.durability;
        this.range = 3;
    }
}

class Sword extends Weapon {
    constructor(name) {
        super(name);
        this.attack = 25;
        this.durability = 500;
        this.currentDurability = this.durability;
        this.range = 1;
    }
}

class Staff extends Weapon {
    constructor(name) {
        super(name);
        this.attack = 8;
        this.durability = 300;
        this.currentDurability = this.durability;
        this.range = 2;
    }
}

class Knife extends Weapon {
    constructor(name) {
        super(name);
        this.attack = 5;
        this.durability = 300;
        this.currentDurability = this.durability;
        this.range = 1;
    }
}

class Longbow extends Bow {
    constructor(name) {
        super(name);
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends Sword {
    constructor(name) {
        super(name);
        this.attack = 27;
        this.durability = 800;
    }
}

class StormStaff extends Staff {
    constructor(name) {
        super(name);
        this.attack = 10;
        this.range = 3;
    }
}
