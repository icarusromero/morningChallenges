const nextPerfSqr = num => {
    let squared = Math.sqrt(num);
    let nextSqr = 0;
    if(squared % 1 === 0){
        nextSqr = Math.pow((squared + 1), 2) 
    } else{
        nextSqr = -1
    }
    return nextSqr
}

console.log(nextPerfSqr(9))