// Write your solution below:

function pigLatin(phrase){
    phrase = phrase.split(' ');
    let newPhrase = []
    for(let i = 0; i < phrase.length; i++){
        let word = phrase[i];
    if(word.startsWith('a') || word.startsWith('e') || word.startsWith('i') || word.startsWith('o') || word.startsWith('u')) {
        word = word + 'yay';
        newPhrase.push(word);
    } else {
        word = word + word[0] + 'ay';
        word = word.split('');
        word.shift();
        word = word.join('');
        newPhrase.push(word);
    }
}
    return newPhrase.join(' ')
}
console.log(pigLatin('mister is a butt'))