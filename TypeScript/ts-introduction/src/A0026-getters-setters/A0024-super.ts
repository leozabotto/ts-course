// super class
export class Person {
  static defaultAge = 0;

  constructor(
    private name: string,
    private lastName: string,
    private age: number,
    private cpf: string,
  ) {}

  normalMethod(): void {
    console.log(Person.defaultAge);
  }

  static sayHello(): void {
    console.log('Hello!');
  }

  static createPerson(name: string, lastName: string): Person {
    return new Person(name, lastName, 0, '000.000.000-00');
  }
}

const person = Person.createPerson('Leo', 'Zabotto');
console.log(person);
person.normalMethod();
