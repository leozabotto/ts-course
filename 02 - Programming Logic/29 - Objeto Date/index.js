// Referência: mdn
const tresHoras = 60 * 60 * 3 * 1000; 
const data = new Date(0 + tresHoras); // 01/01/1970 Timestamp Unix ou Época Unic
console.log(data.toString())

// Date(ano, mês [0], dia, hora, minuto, segundo, ms)

/**
 * getDate()
 * getMonth() + 1
 * getFullYear()
 * getHours()
 * getMinutes()
 * getSeconds()
 * getMilliseconds()
 * getDay()
 */