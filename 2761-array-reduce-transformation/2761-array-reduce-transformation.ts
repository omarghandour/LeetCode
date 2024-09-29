type Reducer<T, U> = (acc: T, curr: U) => T;

function reduce<T, U>(nums: U[], fn: Reducer<T, U>, init: T): T {
  let val: T = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
}