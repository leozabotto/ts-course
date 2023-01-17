// generics with intersection

function concatObjects<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  // return { ...obj1, ...obj2 }
  return Object.assign({}, obj1, obj2)
}

const obj1 = { key1: 'value1'}
const obj2 = { key2: 'value2' }

const concatenedObjects = concatObjects(obj1, obj2);
console.log(concatenedObjects)

export { }
