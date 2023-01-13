type PersonType = {
  name: string;
  lastName: string;
  fullName(): string; // or fullName: () => string
};

// can implent multiple types
class Person implements PersonType {
  constructor(public name: string, public lastName: string) {}

  fullName(): string {
    return this.name + ' ' + this.lastName;
  }
}

const person = new Person('Leo', 'Zabotto');
console.log(person.fullName());

export {};
