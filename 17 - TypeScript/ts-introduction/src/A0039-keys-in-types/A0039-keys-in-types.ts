type Vehicle = {
  brand: string;
  year: string;
};

type Car = {
  brand: Vehicle['brand'];
  year: Vehicle['year'];
  name: string;
};

const car: Car = {
  brand: 'Ford',
  name: 'Ka',
  year: '2020',
};

export {};
