const { check, runTest } = require("../../test-api");

let items = [];

// use a loop to solve this problem :)

// write your loop here
for (let i = 1; i < 21; i++) {
  items.push(i)
}




runTest("check the numbers 1 up to 20 are pushed into items", function () {
  check(items).isEqualTo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
});
