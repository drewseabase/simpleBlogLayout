var lengthofLongestSubstring = function(s){
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for(let right = 0; right < s.length; right++){
        while(set.has(s[right])){
            set.delete(s[right]);
            left++;
        }

        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

let s = 'pwwkew';

console.log(lengthofLongestSubstring(s));