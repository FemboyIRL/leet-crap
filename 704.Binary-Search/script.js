function binary_search(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right){
        const middle = Math.floor((left + right) / 2)
        console.log(middle)
        if (target === nums[middle]){
            return middle
        }
        if (target < nums[middle]){
            right = middle - 1 
        }
        if(target > nums[middle]){
            left = left + 1
        }
    }

    return -1
}

const solution = binary_search([1,2,3,4,5], 2)

