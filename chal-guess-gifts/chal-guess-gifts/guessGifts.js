let wishlist = [
    {
        name: 'marudai',
        size: 'medium',
        clatters: 'no',
        weight: 'light'
    },
    {
        name: 'bobbins',
        size: 'small',
        clatters: 'yes',
        weight: 'medium'
    },
    {
        name: 'yarn',
        size: 'small',
        clatters: 'no',
        weight: 'light'
    },
    {
        name: 'hot wheels',
        size: 'small',
        clatters: 'a bit',
        weight: 'light'
    },
    {
        name: 'picture frame',
        size: 'large',
        clatters: 'a bit',
        weight: 'heavy'
    }
]

let presents = [
    {
        size: 'small',
        clatters: 'a bit',
        weight: 'light'
    },
    {
        size: 'medium',
        clatters: 'no',
        weight: 'light'
    }
]

const guessPresents = (wishArr, presArr) => {
    let guesses = []
    for(let i = 0; i < wishArr.length; i++){
        for(let x = 0; x < presArr.length; x++){
            if(wishArr[i].size === presArr[x].size && wishArr[i].clatters === presArr[x].clatters && wishArr[i].weight === presArr[x].weight){
                guesses.push(wishArr[i].name)
            }
        }
    }
    return guesses
}

console.log(guessPresents(wishlist, presents))