var summaryRanges = function(nums) {
    let results = []
    let j = 0
    for(let i = 0; i < nums.length; i++){
        j = i
        while(isNextTo(nums[j], nums[j + 1])){
            j++
        }
        if(j !== i){
            results.push(`${nums[i]}->${nums[j]}`)
            i = j 
        } else {
            results.push(nums[i].toString())
        }
    }
    return results
};

function isNextTo(num1, num2){
    return num2 - num1 === 1 ? true : false
}

const solution = summaryRanges([0,2,5,6,8,9])

console.log(solution)