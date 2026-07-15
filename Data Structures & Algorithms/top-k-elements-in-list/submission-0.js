class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()
        for(let num of nums){
            map.set(num,(map.get(num)|| 0)+1)
        }
    let bucket = Array(nums.length+1).fill(0).map(()=>[])
    for(let[num,freq] of map){
        bucket[freq].push(num)
    }
    const result =[]
    for(let i = bucket.length-1;i>=0;i--){
        for(let num of bucket[i])
        result.push(num)

        if(result.length === k){
            return result;
        }
    }

    }
}
