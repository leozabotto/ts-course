export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected power: number,
    protected health: number,
  ) {}

  attack(character: Character): void {
    this.catchphrase();
    character.lossHealth(this.power);
  }

  lossHealth(attackPower: number): void {
    this.health -= attackPower;
    console.log(`${this.name} now have health level of ${this.health}`);
  }

  abstract catchphrase(): void;
}

export class Warrior extends Character {
  protected emoji = '\u{1F9DD}';

  catchphrase(): void {
    console.log(this.emoji + ' SMASH HIM!');
  }
}

export class Monster extends Character {
  protected emoji = '\u{1F9DF}';

  catchphrase(): void {
    console.log(this.emoji + ' MUAAAAAAAAAAAAAARGH');
  }
}

const warrior = new Warrior('Warrior', 100, 1000);
const monster = new Monster(`Monster`, 87, 1000);

warrior.attack(monster);
