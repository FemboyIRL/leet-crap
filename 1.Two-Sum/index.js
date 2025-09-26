const twoSum = (nums, target) => {
    for(let i = 0; i < nums.length; i++){
        if(nums[i + 1] === undefined) return
        for(let j = i; j < nums.length; j++){
            if(i !== j) {
                if(nums[i] + nums[j] === target) return [i, j]
            }
        }
    }
}

const solution = twoSum([3,2,3,3,5], 8)

console.log(solution)