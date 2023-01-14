type ColorsObject = typeof colors;
type ColorsKeys = keyof ColorsObject;

const colors = {
  red: 'vermelho',
  green: 'verde',
  blue: 'azul',
};

function translateColor(color: ColorsKeys, colors: ColorsObject) {
  return colors[color];
}

console.log(translateColor('red', colors));
console.log(translateColor('green', colors));

export {};
