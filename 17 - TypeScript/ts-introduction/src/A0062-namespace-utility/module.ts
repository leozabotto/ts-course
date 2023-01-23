import _ from 'lodash';

// extending external lib

_.mul = function (array: number[]): number {
  return array.reduce((total, actual) => total * actual, 1);
};

global.myGlobal = 'wow';

export default _;
