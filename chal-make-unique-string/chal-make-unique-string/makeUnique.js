// Write your solution below:

const makeUniq = str => {
    str = str.split('');
    for(let i = 0; i < str.length; i++){
        for(let x = i + 1; x < str.length; x++){
            if(str[i] === str[x]){
                str.splice(x, 1);
            }
        }
    }
    console.log(str.join(''))
}
makeUniq('helloworld')