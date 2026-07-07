class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
   
    isAnagram(s, t) {
        if (s.length !== t.length) return false; 
        let counter = {}
        for(let letter of s){
            counter[letter] = (counter[letter] || 0)+1
        }
        for(let item of t){
            if(!counter[item]) return false
            counter[item] -=1
        }
        return true
         
    }
}
