
const num = 266219;
const x = num.toString().split('').reduce((a, b) => a * b);
console.log(x);
const y = x ** 3;
console.log(y);
console.log(String(y).slice(0, 2));

