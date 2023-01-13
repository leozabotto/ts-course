/* eslint-disable */

// convention -> custom types names must initiate with a upper case letter

type Age = number;
type Person = {
  name: string;
  age: Age;
  salary: number;
  favoriteColor?: FavoriteColor;
};

function chooseAColor(color: 'Red' | 'Yellow' | 'Blue') {
  return color;
}

console.log(chooseAColor('Red'));

type ColorRGB = 'Red' | 'Blue' | 'Green';
type ColorCMYK = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';

type FavoriteColor = ColorRGB | ColorCMYK;

const person: Person = {
  name: 'Leonardo',
  age: 20,
  salary: 35_000, // 35000
};

function setFavoriteColor(person: Person, color: FavoriteColor): Person {
  return { ...person, favoriteColor: color };
}

console.log(setFavoriteColor(person, 'Green'));

export {};
