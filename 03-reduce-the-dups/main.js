/*
  REDUCE THE DUPS

  1. Given the already-sorted array `[1, 1, 2, 3, 3, 4]`, write
     a WHILE loop which creates a copy of this array, except
     with the duplicates removed.
  2. Display both arrays as strings on the page.

*/

const redundantArray = [1, 1, 2, 3, 3, 4, 5, 5, 9, 1, 9, 7, 8, 7]
let newArry = [];
let index = 0;
while (index < redundantArray.length) {
  //console.log(redundantArry[index]);
  let currentNumber = redundantArray[index]
  if (newArry.includes(currentNumber) === false) {
    newArry.push(currentNumber)
  }
  index = index + 1;
}
console.log(redundantArray);
console.log(newArry);
// [1,2,3,4,5,6,7,8]
// YOUR CODE HERE
