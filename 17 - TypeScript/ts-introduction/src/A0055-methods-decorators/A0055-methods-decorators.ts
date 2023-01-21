function decorator(
  classPrototype: any,
  methodName: string,
  propertyDescriptor: PropertyDescriptor,
): any {
  console.log(classPrototype);
  console.log(methodName);
  console.log(propertyDescriptor);

  return {
    writable: true,
    value: function (...args: any[]) {
      return args[0].toUpperCase();
    },
  };
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

  @decorator
  method(msg: string): string {
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
