const maskify = str => {
    str = str.split('')
    if(str.length > 4){
        let i = 0
        while(i < str.length - 4){
            str.splice(i, 1, '#')
            i++
        }
    }
    return str.join('')
}

console.log(maskify('fehiofah1398124hh3ui3'))