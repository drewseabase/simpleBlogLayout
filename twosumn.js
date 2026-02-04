var twoSum = function(nums, target){
    const seen = new Map();

    for(let i = 0; i < nums.length; i++){
        const need = target - nums[i];

        if(seen.has(need)){
            return [ seen.get(need), i];
        }

        seen.set(nums[i],i);
    }

}

let nums = [3,22,2,3];
let target = 6;
console.log(twoSum(nums, target))