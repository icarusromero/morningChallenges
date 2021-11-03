// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

const balanceCheck = str => {
    let rParen = 0
    let lParen = 0
    for (let i = 0; i < str.length; i++){
        if(str[i] === '('){
            rParen = rParen + 1
        } else if(str[i] === ')'){
            lParen = lParen + 1
        }
    }
    if(rParen ===  lParen){
        return true
    } else {
        return false
    }
}

console.log(balanceCheck(sample4))