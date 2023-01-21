interface Constructor {
  new (...args: any[]): any;
}

function reverseNameAndColor(param1: string, param2: string) {
  return function (target: Constructor): Constructor {
    console.log(`I'm the decorator and I received ${target}`);

    return class extends target {
      name: string;
      color: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.reverse(args[0]);
        this.color = this.reverse(args[1]);
      }

      reverse(value: string): string {
        return value.split('').reverse().join('') + param1 + ' ' + ' ' + param2;
      }
    };
  };
}

function anotherDecorator(target: Constructor) {
  console.log(`I'm the other decorator`);
  return target;
}

@anotherDecorator
@reverseNameAndColor('Test', 'Test2')
class Animal {
  constructor(public name: string, public color: string) {
    console.log(`I'm the class`);
  }
}

const animal = new Animal('Frog', 'Green');
console.log(animal);

export {};
