type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K]

const getKey: GetKeyFn = (object, key) => object[key]

const animal = {
  color: 'Pink',
  vaccines: ['V1', 'V2']
}

const color = getKey(animal, 'color')
const vaccines = getKey(animal, 'vaccines')

console.log(color)
console.log(vaccines)
