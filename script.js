'use strict';
let arr = ['132', '227', '355', '404', '547', '678', '777']; // в виде строк
let item
arr.forEach((item) = function(item) {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
});

function isPrime(n) {
  for (let i = 2; i * i <= n; i == 2 ? i++ : i += 2) if (n % i == 0) return false;
  return n > 1;
}
isPrime();
const res = [...Array(41)].reduce((a, _, i) => a.concat(isPrime(i) ? `Делители числа ${i}: 1 и ${i}` : []) , []).join('\n')

