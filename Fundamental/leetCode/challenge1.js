/** @format */

function memoize(fn) {
  const cache = {};
  const result = 0;
  return function (...args) {
    const value = JSON.stringify(args);
    if (cache[value] !== undefined) {
      return cache[value];
    }

    const result = fn(...args);
    cache[value] = result;
    return result;
  };
}

const sum = memoize((a, b) => a + b);

console.log(sum(2, 2));

init = 0;
nums = [1, 2, 3, 4];
result = 0;
function reduce(nums) {
  if (nums.length == 0) return init;
  else {
    for (let i = 0; i < nums.length; i++) {
      let sum = nums[i] + nums[i + 1];
      result = sum;
      console.log(result);
    }
    return result;
  }
}
console.log(reduce(nums));
