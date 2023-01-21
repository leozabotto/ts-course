function decorator(classPrototype: any, name: string | symbol): any {
  console.log(classPrototype);
  console.log(name);

  let propertyValue: any;

  return {
    get: () => propertyValue,
    set: (value: any) => {
      propertyValue = value.split('').reverse().join('');
    },
  };
}

export class Person {
  @decorator
  name: string;

  @decorator
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
