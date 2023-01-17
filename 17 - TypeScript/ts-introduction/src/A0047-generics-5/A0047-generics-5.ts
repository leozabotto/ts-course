class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

const person1 = new Person('Leo', 20)
const person2 = new Person(['Leo'], 20)

// Stack (Pilha) implementation

class Stack<T> {
  private counter = 0;
  private elements: { [k: number]: T } = {}

  push(element: T): void {
    this.elements[this.counter] = element
    this.counter++
  }

  pop(): T | void {
    if (this.isStackEmpty()) return undefined

    this.counter--;
    const element = this.elements[this.counter]
    delete this.elements[this.counter]

    return element
  }

  isStackEmpty(): boolean {
    return this.counter === 0
  }

  show(): void {
    for (const key in this.elements) {
      console.log(this.elements[key])
    }
  }
}

const stack = new Stack<number>();

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

stack.show()

export { }
