var romanToInt = function(s) {
    const numbers_in_roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000        
    }

    let natural_number = 0

    for(let i = 0; i < s.length; i++){
        if(numbers_in_roman[s[i]] < numbers_in_roman[s[i + 1]]){
            console.log(numbers_in_roman[s[i]])
            console.log(numbers_in_roman[s[i + 1]])
            const substraction = numbers_in_roman[s[i + 1]] - numbers_in_roman[s[i]]
            console.log(substraction)
            natural_number += substraction
            i++
        } else {
            natural_number += numbers_in_roman[s[i]]
        }
    }

    return natural_number
};

const s = "MCMXCIV"

console.log(romanToInt(s))