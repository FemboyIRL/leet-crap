var isPalindrome = function(x) {
    if(x < 0) return false

    return Number(x.toString().split("").reverse().join("")) === x ? true : false
};
 
console.log(isPalindrome(121))
