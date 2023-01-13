function testFunction(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name);
  console.log(age);
}

// fn.call / fn.apply -> first arg is 'this'
testFunction.call(new Date(), 'Leo', 20);
testFunction.apply(new Date(), ['Leo', 20]);

export {};
