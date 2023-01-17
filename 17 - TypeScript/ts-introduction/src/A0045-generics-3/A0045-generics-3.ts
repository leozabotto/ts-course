// constraint (extends)
interface PersonProtocol<T = string, U = number> {
  name: T;
  lastName: T;
  age: U
}

type PersonProcol2<T = string, U = number> = {
  name: T;
  lastName: T;
  age: U
}

const student: PersonProtocol<string, number> = {
  name: 'Leo',
  lastName: 'Zabotto',
  age: 30
}

console.log(student)

export {}
