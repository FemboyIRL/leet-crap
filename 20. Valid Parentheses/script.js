var isValid = function(s) {
    const stack = []

    const close_to_open = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    for(let i = 0; i < s.length; i++){
        if(close_to_open[s[i]]){
            let last_char = stack.pop()
            if(close_to_open[s[i]] !== last_char){
                return false
            }
        } else{ 
            stack.push(s[i])
        }
    }

    return true
};

const s = "()[{}]{}"

console.log(isValid(s))