/* eslint-disable */

type HasName = { name: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };

type Person = HasName & HasLastName & HasAge;

const person: Person = {
  name: 'Leo',
  lastName: 'Zabotto',
  age: 20,
};

type AB = 'A' | 'B';
type AC = 'A' | 'C';

type Intersection = AB & AC;

export {};
