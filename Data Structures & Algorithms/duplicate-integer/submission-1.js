class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a, b) => a - b);
        let i = 0
        let j = 1
        let ans = false
        while(i<j && j < nums.length){
            if(nums[i++] != nums[j++]){
                ans = false
            }
            else{
                ans = true
                break
            }
        }
        return ans 
    }
}
