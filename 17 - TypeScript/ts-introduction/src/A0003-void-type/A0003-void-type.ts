/* eslint-disable */

function withoutReturn(...args: string[]): void {
  console.log(args.join(' '));
}

withoutReturn('Leo', 'Olá');

const person = {
  name: 'Leonardo',
  lastName: 'Zabotto',

  showName(): void {
    console.log(this.name + ' ' + this.lastName);
  },
};

person.showName();

export {};
