var lengthOfLongestSubstring = function(s) {
    let left = 0
    let maxValue = 0
    let set = new Set()

    for(let right = 0; right < s.length; right++){
        while (set.has(s[right])){
            set.delete(s[left])
            left++
        }

        set.add(s[right])

        maxValue = Math.max(maxValue, set.size)
    }

    return maxValue
};

const s = "qrsvbspk"

console.log(lengthOfLongestSubstring(s))