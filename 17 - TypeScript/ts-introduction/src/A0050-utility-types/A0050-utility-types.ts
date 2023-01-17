                    // key     value
const object1: Record<string, string> = {
  name: 'Leo',
  lastName: 'Zabotto'
}

type PersonProtocol = {
  name?: string,
  lastName?: string,
  age?: number
}

// Required
type PersonRequired = Required<PersonProtocol>

const object2: PersonRequired = {
  name: 'Leo',
  lastName: 'Zabotto',
  age: 20
}

console.log(object2)

// Partial
type PersonPartial = Partial<PersonProtocol>

// Readonly
type PersonRedonly = Readonly<PersonProtocol>

// Pick
type PersonPick = Pick<PersonRequired, 'name' | 'lastName'>

// Extract & Exclude

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TypeExclude = Exclude<ABC, CDE>;
type TypeExtract = Extract<ABC, CDE>;



export {}
