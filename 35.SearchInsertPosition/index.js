/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  return searchInsertWithIndex(nums, target, Math.floor(nums.length / 2), 0);
};

let searchInsertWithIndex = function(nums, target, searchIndex, currentIndex) {
  if (!nums.length || nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    if (nums[0] >= target) {
      return currentIndex;
    }
    return currentIndex + 1;
  }
  if (nums.length === 2) {
    if (nums[0] >= target) {
      return currentIndex;
    } else if ((nums[0] < target && target < nums[1]) || nums[1] === target) {
      return currentIndex + 1;
    } else {
      return currentIndex + 2;
    }
  }
  if (nums[searchIndex] > target) {
    return searchInsertWithIndex(
      nums.slice(0, searchIndex),
      target,
      Math.floor(searchIndex / 2),
      currentIndex,
    );
  } else if (nums[searchIndex] < target) {
    return searchInsertWithIndex(
      nums.slice(searchIndex + 1, nums.length),
      target,
      Math.floor(searchIndex / 2),
      searchIndex + currentIndex + 1,
    );
  } else {
    return searchIndex;
  }
};
