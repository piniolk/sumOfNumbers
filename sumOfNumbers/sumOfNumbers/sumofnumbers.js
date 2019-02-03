/* created by piniolk on 2/2/19 */

function sumFor(list) {
  let i = 0;
  let sum = 0;
  for (i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let i = 0;
  let sum = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursive(list) {
  if (list.length === 1) {
    return list[0];
  }
  let sum = 0;
  sum = list.shift() + sumRecursive(list);
  return sum;
}

function sumTheSimpleWay(list) {
  return _.reduce(list, (memo, num) => memo + num, 0);
}

const array = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4];
const array3 = [1, 2, 3, 4];
const array4 = [1, 2, 3, 4];
console.log(`With for loops: ${sumFor(array)}`);
console.log(`With while loops: ${sumWhile(array2)}`);
console.log(`With recursion: ${sumRecursive(array3)}`);
console.log(`The simple way: ${sumTheSimpleWay(array4)}`);
