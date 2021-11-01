const missingNum = (list, maxNum) => {
    for(let i = 1; i < maxNum + 1; i++){
        if(list.includes(i) === false){
            return i
        }
    }
}

console.log(missingNum([2, 1, 4, 3, 6, 5, 7, 10, 9], 10))