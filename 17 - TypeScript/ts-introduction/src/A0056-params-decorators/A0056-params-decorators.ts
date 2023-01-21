function decorator(
  classPrototype: any,
  methodName: string | symbol,
  paramIndex: number,
): any {
  console.log(classPrototype);
  console.log(methodName);
  console.log(paramIndex);

  return 'Does not return anything';
}

export class Person {
  name: string;
  lastname: string;
  age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  method(@decorator msg: string): string {
    return `${this.name} ${this.lastname}: ${msg}`;
  }

  get fullName(): string {
    return this.name + ' ' + this.lastname;
  }

  set fullName(value) {
    const words = value.split(/\s+g/);
    const firstName = words.shift();

    if (!firstName) return;

    this.name = firstName;
    this.lastname = words.join(' ');
  }
}

const person = new Person('Leo', 'Zabotto', 20);
// person.method = () => 'Heyy!';

const method = person.method('Hello, world!');
console.log(method);

export {};
