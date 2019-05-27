/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function(nums, target) {
  if (!nums.length || nums.length === 0 || target < nums[0]) {
    return 0;
  }
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  return searchInsertInRange(nums, 0, nums.length - 1, target);
};

let searchInsertInRange = function(nums, min, max, target) {
  let mid = Math.floor((min + max) / 2);

  if (nums[mid] === target) return mid;

  if (nums[mid] > target) {
    return mid > min ? searchInsertInRange(nums, min, mid - 1, target) : min;
  } else {
    return mid < max
      ? searchInsertInRange(nums, mid + 1, max, target)
      : max + 1;
  }
};

// Solution 2
// var searchInsert = function(nums, target) {
//   if (!nums.length || nums.length === 0) {
//     return 0;
//   }
//   return searchInsertWithIndex(nums, target, Math.floor(nums.length / 2), 0);
// };

// let searchInsertWithIndex = function(nums, target, searchIndex, currentIndex) {
//   if (nums.length === 1) {
//     if (nums[0] >= target) {
//       return currentIndex;
//     }
//     return currentIndex + 1;
//   }
//   if (nums.length === 2) {
//     if (nums[0] >= target) {
//       return currentIndex;
//     } else if ((nums[0] < target && target < nums[1]) || nums[1] === target) {
//       return currentIndex + 1;
//     } else {
//       return currentIndex + 2;
//     }
//   }
//   if (nums[searchIndex] > target) {
//     return searchInsertWithIndex(
//       nums.slice(0, searchIndex),
//       target,
//       Math.floor(searchIndex / 2),
//       currentIndex,
//     );
//   } else if (nums[searchIndex] < target) {
//     return searchInsertWithIndex(
//       nums.slice(searchIndex + 1, nums.length),
//       target,
//       Math.floor(searchIndex / 2),
//       searchIndex + currentIndex + 1,
//     );
//   } else {
//     return searchIndex;
//   }
// };

// Solution 3
// var search = function(target, i1, i2, nums) {
//   var mid = Math.floor((i2 + i1) / 2);

//   if (target == nums[mid]) return mid;
//   if (target == nums[mid + 1]) return mid + 1;

//   if (target > nums[mid + 1]) return search(target, mid + 1, i2, nums);
//   if (target < nums[mid]) return search(target, i1, mid, nums);
//   return mid + 1;
// };

// var searchInsert = function(nums, target) {
//   if (target <= nums[0]) return 0;
//   if (target > nums[nums.length - 1]) return nums.length;
//   if (target == nums[nums.length - 1]) return nums.length - 1;
//   return search(target, 0, nums.length - 1, nums);
// };
