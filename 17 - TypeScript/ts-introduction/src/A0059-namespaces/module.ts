/* eslint-disable @typescript-eslint/no-namespace */

namespace MyNamespace {
  export const name = 'Leo';

  export class NamespacePerson {
    constructor(public name: string) {}
  }

  const person = new NamespacePerson('Leo');
  console.log(person);
}

// const externalPerson = new MyNamespace.NamespacePerson('Leo');
