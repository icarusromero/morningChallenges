function unique(word){
  for (let i = 0; i < word.length; i++){
    for (let x = i + 1; x < word.length; x++){
      if(word[i] === word[x]){
       return false;
      }
    }
  }
  return true;
}
console.log(unique('mandy'))