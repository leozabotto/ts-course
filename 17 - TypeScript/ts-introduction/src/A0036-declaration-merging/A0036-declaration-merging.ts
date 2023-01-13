interface Person {
  name: string;
}

interface Person {
  lastName: string;
}

interface Person {
  readonly address: string[];
}

interface Person {
  age?: number;
}

const person: Person = {
  name: 'Leo',
  lastName: 'Zabotto',
  address: ['Av. Brasil'],
  age: 20,
};

person.lastName = '';

export {};
