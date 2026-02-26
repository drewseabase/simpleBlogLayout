var lengthofLongestSubstring = function(s){
    let map = [];

    for(let char of s){
        if(!map.includes(char)){
            map.push(char);
        }
    }
    
    let final = map.join('');
   
    return final.length;
};

let s = 'pwwkew';

console.log(lengthofLongestSubstring(s));