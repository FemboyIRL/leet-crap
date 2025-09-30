var longestCommonPrefix = function(strs) {
    if(!strs ||strs.length === 0) return ""
    let base = strs[0]
    for(let i = 0; i < base.length; i++){
        for(let j = 1; j < strs.length; j++){
            let currentBase = strs[j]
            if(i === currentBase.length || currentBase[i] !== base[i]){
                return base.slice(0, i)
            } 
        }
    }
    return base
};

const strs = ["flower","flow","flight"]

console.log(longestCommonPrefix(strs))