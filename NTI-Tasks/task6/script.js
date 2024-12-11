let arr = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

// function return boolean if a number divisible by 10

function divisibleByTen(number) {
  return number % 10 == 0;
}
console.log(divisibleByTen(20));

// function find max number in array

function findMaxNumber(array) {
  if (arr.length == 0) return false;
  const max = Math.max(...array);
  return max;
}
console.log(findMaxNumber(arr));

// function  to reverse array

function reverseArray(array) {
  if (arr.length == 0 || !Array.isArray(array)) return false;
  array.reverse();
  return array;
}
console.log(reverseArray(arr))