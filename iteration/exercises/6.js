const { check, runTest } = require("../../test-api");

let alternatingChars = [];

// your loop here...
for (let i = 3; i <= 10; i++) {
  if (i % 2 === 1) {
    alternatingChars.push("x")
} else { 
  alternatingChars.push("o")

}
}
console.log(alternatingChars);

runTest("can push alternating characters into an array", function () {
  check(alternatingChars).isEqualTo(["x", "o", "x", "o", "x", "o", "x", "o"]);
});
