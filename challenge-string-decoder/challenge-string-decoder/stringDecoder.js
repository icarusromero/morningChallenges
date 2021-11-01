function decoder(code){
    code = code.split('');
    let i = 0;
    let uncode = []
    while(i < code.length){
        if(code[i] === 0){
            i += 1
        } else if(isNaN(num) === false){
            i = i + num + 1
        }else{
            uncode.push(num);
            i += 1
        }
    }
    return uncode
}

console.log(decoder('0h2xce5ngbrdy'))