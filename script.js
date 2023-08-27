'use strict';

function test(str) {
  if (typeof str !== 'string') {
    alert('аргумент не строка');
    return;
  }

  str = str.trim('');
  return str.length > 30 ? str.slice(0, 30) + '...' : str;
}

let string = "Имя пользователя";
let stringLength = 'asdlkasjdlasjdaslkdajsldlasjdlasdjlasdkjalsdjalsdjalsdjl';
let number = 123;

test(string);
console.log(test(string));
test(number);
console.log(test(number));
test(stringLength);
console.log(test(stringLength));