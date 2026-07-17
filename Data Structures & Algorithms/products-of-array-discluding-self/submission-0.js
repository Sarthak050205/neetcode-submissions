class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = new Array(nums.length)
        for(let i = 0 ; i<nums.length;i++){
            let res = 1
            for (let j = nums.length-1; j>=0;j--){
                
                if(j!==i){
                    res = res*nums[j]
                }
                else continue;
            }
            arr[i] = res
        }
        return arr
    }
}
