const numbers = [1,2,3,4,5,6,7,8,9,10];
let times5 = [];

// times5 should be: [5,10,15,20,25,30,35,40,45,50]
// Write your code below

numbers.forEach(function(number) {
  times5.push(number * 5);
});