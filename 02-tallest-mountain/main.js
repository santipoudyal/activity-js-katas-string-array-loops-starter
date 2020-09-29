/*
  TALLEST MOUNTAIN

  1. From scratch, create an array containing a bunch of numbers representing
     the heights of various mountains.
  2. Write a WHILE loop which identifies the height of the tallest of the
     available mountains in the array.
  3. Display the tallest height value on the page.
*/
let mountainHeights = [100, 200, 300, 1000, 500]
let tallestmountain = 0;
let index = 0;
while (index < mountainHeights.length) {
   //console.log(mountaiHeights[index]);
   if (tallestmountain < mountainHeights[index]) {
      tallestmountain = mountainHeights[index]
   }
   index = index + 1;
}
console.log(tallestmountain);
// YOUR CODE HERE
