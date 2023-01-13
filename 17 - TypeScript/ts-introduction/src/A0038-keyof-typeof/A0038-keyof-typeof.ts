type ColorsObject = {
  red: string;
  green: string;
  blue: string;
};

const colors: ColorsObject = {
  red: 'vermelho',
  green: 'verde',
  blue: 'azul',
};

function translateColor(color: StorageManager, colors: ColorsObject) {
  return colors;
}

export {};
