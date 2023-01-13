// super class
export class Person {
  constructor(
    private name: string,
    private lastName: string,
    private age: number,
    private _cpf: string,
  ) {}

  /* old way
  getCpf(): string {
    return this.cpf.replace(/\D/g, '');
  }

  setCpf(cpf: string): void {
    this.cpf = cpf;
  }*/

  // new way

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const person = new Person('Leo', 'Zabotto', 20, '111.111.111-11');
person.cpf = '222.222.222-22';
console.log(person.cpf);
