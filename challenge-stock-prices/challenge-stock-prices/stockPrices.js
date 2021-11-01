function best(arr){
    let profit = 0;
    let buy;
    let sell;
    for(let i = 0; i < arr.length; i++){
        for(let x = i + 1; x < arr.length; x++){
            if(arr[x] - arr[i] > profit){
                profit = arr[x] - arr[i]
                buy = arr[i]
                sell = arr[x]
            }
        }
    }
    if(profit > 0){
        return `${profit} - buy at ${buy}, sell at ${sell}`
    }
    else{
        return '$0'
    }
}
let array = [15, 10, 20, 22, 1, 9]

console.log(best(array))