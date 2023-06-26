const assert = require("assert");

// assert we use rarely but when we use it for comparing a output or expected result for testing purpose here a example of a function which return sum if sum is not as expected we will gvet an error

function addNum(x, y) {
  return x + y;
}

const res = addNum(1, 2);

assert(res == 3, "It should be 3");
assert(res == 4, "It should be 3"); // through and assertions error
