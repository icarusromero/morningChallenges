const catchDif = arr => {
    let even = []
    let odd = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            even.push(arr[i])
        } else {
            odd.push(arr[i])
        }
    }
    if(even.length === 1){
        return even
    } else{
        return odd
    }
}

console.log(catchDif([160, 3, 1719, 19, 11, 13, -21]))