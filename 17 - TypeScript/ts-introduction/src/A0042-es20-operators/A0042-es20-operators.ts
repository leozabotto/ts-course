// optional chaining and null coalescing
type Document = {
  title: string;
  text: string;
  date?: Date;
};

const document: Document = {
  title: 'The Title',
  text: 'The Text',
};

// only works with null / undefined
console.log(document.date?.toDateString() ?? 'There is no value');

console.log(false ?? 'There is no value');
console.log(null ?? 'There is no value');

export {};
