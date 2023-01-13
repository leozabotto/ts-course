export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return this.name + ' ' + this.lastName;
  }
}

// student is a person
export class Student extends Person {}
export class Customer extends Person {
  // overriding methods (polymorfism)
  getFullName(): string {
    return `Customer: ${this.name} ${this.lastName}`;
  }
}

const person = new Person('Leo', 'Zabotto', 20, '123.456.789-12');
const student = new Student('Leo', 'Zabotto', 20, '123.456.789-12');
const customer = new Customer('Leo', 'Zabotto', 20, '123.456.789-12');

console.log(person);
console.log(student);
console.log(customer);
