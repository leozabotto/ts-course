/* eslint-disable */

/* Recommended */

// Conditional

const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type Assertion (only do this when have sure that the element exists)

const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement

const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Anything';

/* Not Recomemnded */

// ! -> element cannot be null (non-null assertion)

const body2 = document.querySelector('body')!;
body2.style.background = 'red';

const body4 = document.querySelector('body') as unknown as number;

export {};
