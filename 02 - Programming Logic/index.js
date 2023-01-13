var r = [2, 5, 6, 8]
var s = [1, 3, 4, 7, 11]
var x = [0]
var i

for(i = 0; i <= 3; i++) {
  x[i] = r[i];
}

for(i = 0; i <= 4; i++) {
  x[i+4] = s[i];
}

console.log(x[8]);
console.log(i);
