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
        if (this.currentDurability > damage) {this.currentDurability -= damage;
          console.log(`Прочность оружия ${this.name} снижена на ${damage}. Новая прочность - ${this.currentDurability}`);
          return this.currentDurability;
        } else {
            console.log(`Оружие ${this.name} сломалось, получив урон ${damage} при прочности ${this.currentDurability}`);
            return 0;
        }

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
const poleaxe = new Weapon("Секира", 27, 500, 1);
const stormStaff = new Weapon("Посох бури", 10, 300, 3);
