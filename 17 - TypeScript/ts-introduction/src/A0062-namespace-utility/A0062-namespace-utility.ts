import _ from './module';

const array = [100, 200, 300, 400];

console.log(global.myGlobal);

console.log(_.sum(array));
console.log(_.min(array));
console.log(_.max(array));
console.log(_.mean(array));
