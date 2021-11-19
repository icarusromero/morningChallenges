let myarr = [23, 2, 3, 4, 5]

const sortByProduct = arr => {
    let prodArr = []
    for(let i = 0; i < arr.length; i++){
        prodArr.push(arr[i] * (i + 1))
    }
    let sorted = []
    for(let i = 0; i < prodArr.length; i++){
        for(let c = i + 1; c < prodArr.length; c++){
            if(prodArr[i] > prodArr[c]){
                let smaller = true
            }
        }
    }
    return sorted
}

console.log(sortByProduct(myarr))