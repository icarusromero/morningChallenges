// Write your code below this line

function caesarCipher(str) {
    str = str.split('')

    let num = str.shift();
    num = Number(num);

    let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let decode = [];

    for(let i = 0; i < str.length; i++){
        for(let x = 0; x < alph.length; x++){
            if(str[i] === alph[x]){
                let newPos = (x + num);
                if(newPos > 25){
                    newPos = (newPos - 26);
                }
                decode.push(alph[newPos]);
            }
        }
    }
    return decode.join("")
}

console.log(caesarCipher('6gcmnubmnyyf'))