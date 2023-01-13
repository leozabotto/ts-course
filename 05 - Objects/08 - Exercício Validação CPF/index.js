// 705.484.450-52 070.987.720-03
/*

7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 4 16 15 0 = 237
11 - (237 % 11) = 5 8 20(Primeiro dígito)

Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284
11 - (284 % 11) = 2 (Segundo dígito)

Se o número digito for maior que 9, consideramos 0.
*/


function validateCpf(cpf) {
  let cleanedCpf = cleanCpf(cpf)
  let cpfArray = arrayCpfToInt(Array.from(cleanedCpf))

  let firstDigit = digit(sumCpfNums(cpfArray, 11))
  let secondDigit = digit(sumCpfNums(cpfArray, 12))

  return cpfArray[9] == firstDigit && cpfArray[10] == secondDigit ? true : false
}


function cleanCpf(cpfString) {
  return cpfString.replace(/\D+/g, '')
}

function arrayCpfToInt(cpfArray) {
  return cpfArray.map(num => parseInt(num))
}

function sumCpfNums(cpfIntArray, iQtd) {
  let i = iQtd
  return cpfIntArray.reduce(function(ac, value) {
    i--
    if(i < 2) return ac;
    return ac += value * i
  }, 0)
}

function digit(sumCpfNums) {
  let dig = 11 - (sumCpfNums % 11)
  return dig > 9 ? 0 : dig
}

console.log(validateCpf('16928738813'))