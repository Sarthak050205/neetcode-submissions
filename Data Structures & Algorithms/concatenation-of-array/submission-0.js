class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
       
        let n = nums.length
        let ans = new Array(nums.length *2)
        for (let i = 0; i<= nums.length-1; i++){
            ans[i] = nums[i]
            ans[i+n] = nums[i]
        }
        return ans
    }
}
