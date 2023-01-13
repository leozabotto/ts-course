// super class
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

// sub classes
export class Student extends Person {}
export class Customer extends Person {
  // do not override super constructor, do like this:
  constructor(
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    public customerCode: string,
  ) {
    super(name, lastName, age, cpf);
  }

  getFullName(): string {
    console.log('doing anything before');
    return super.getFullName();
  }
}

const person = new Person('Leo', 'Zabotto', 20, '123.456.789-12');
const student = new Student('Leo', 'Zabotto', 20, '123.456.789-12');
const customer = new Customer('Leo', 'Zabotto', 20, '123.456.789-12', '1203');

console.log(person);
console.log(student);
console.log(customer);
