/* eslint-disable */

// it is possible to use void too
// never returns anything (usually used for functions that breaks the application)
function createError(): never {
  throw new Error('Any error');
}

export {};
