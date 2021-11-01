function hasMoreVowels(word){
    const vowels = []
    const consanants = []
    word = word.toLowerCase()
    word.split('')
    for(let i = 0; i < word.length; i++){
        if(word[i] === 'a'){
            vowels.push(word[i])
        } else if(word[i] === 'e'){
            vowels.push(word[i])
        } else if(word[i] === 'i'){
            vowels.push(word[i])
        } else if(word[i] === 'o'){
            vowels.push(word[i])
        } else if(word[i] === 'u'){
            vowels.push(word[i])
        } else{
            consanants.push(word[i])
        }
    }
    if(vowels.length > consanants.length){
        return true
    } return false
}

console.log(hasMoreVowels('oop'))