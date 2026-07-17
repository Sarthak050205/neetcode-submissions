class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = new Array(nums.length)
        let prefix = 1
        for(let i = 0; i<nums.length;i++){
             arr[i] = prefix;
             prefix = prefix * nums[i]
        }
        let suffix = 1
        for(let i= nums.length-1;i>=0;i--){
            arr[i] = arr[i]*suffix;
            suffix = suffix*nums[i]
        }
        return arr
    }
}
