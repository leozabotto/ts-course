                                   // predicate
function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}

console.log(isNumber(1))
console.log(isNumber('1'))

function sum<T>(...args: T[]): number | null {
  const valueReturn = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) return sum + value
    return sum
  }, 0)

 return valueReturn

}

console.log(sum(1, 2, 3))

export { }
