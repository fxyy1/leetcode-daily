/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let dif = target - nums[i];
        if (map.has(dif)) {
            return [map.get(dif), i];
        } else {
            map.set(nums[i], i);
        }
    }
};
// console.log(twoSum([2, 7, 11, 15], 9));
// @lc code=end