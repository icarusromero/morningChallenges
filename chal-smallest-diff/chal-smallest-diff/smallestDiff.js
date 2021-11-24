let myarr1 = [10, 20, 14, 16, 18]
let myarr2 = [30, 23, 54, 33, 96]

const findSmallestDif = (arr1, arr2) => {
    let subs = []
    arr1.forEach(element => {
        let isubs = []
        arr2.forEach(element2 => {
            if(element > element2){
                isubs.push(element - element2)
            } else if(element2 > element){
                isubs.push(element2 - element)
            }
        })
        subs.push(Math.min(...isubs))
    });
    return Math.min(...subs)
}

console.log(findSmallestDif(myarr1, myarr2))