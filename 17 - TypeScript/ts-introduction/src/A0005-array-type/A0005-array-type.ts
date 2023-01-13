/* eslint-disable */

// Record<string, unknown> -> lose 'autocomplete'

const objectA: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'Value A',
  keyB: 'Value B',
};

// Cannot do this
// objectA.keyC = 'New Key';

// objectA.keyA = 'Another Value';
objectA.keyC = 'New Key';

objectA.keyD = 'New Key';
objectA.keyE = 'New Key';

export {};
