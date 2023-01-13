function add(a: unknown, b: unknown): string | number {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type Person = { type: 'person'; name: string };
type Animal = { type: 'animal'; color: string };
type PersonOrAnimal = Person | Animal;

class Student implements Person {
  type = 'person' as const;
  constructor(public name: string) {}
}

function showName(obj: PersonOrAnimal): void {
  // if ('name' in obj) console.log(obj.name);
  // if (obj instanceof Student) console.log(obj.name);
  switch (obj.type) {
    case 'person':
      console.log(obj.name);
      return;
    case 'animal':
      console.log(`This is an ${obj.color} animal`);
  }
}

showName(new Student('Leo'));
showName({ type: 'animal', color: 'orange' });

export {};
