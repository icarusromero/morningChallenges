// Write your solution below:
const shirtSorter = shirts => {
    shirts = shirts.split('')
    let small = []
    let med = []
    let large = []
    for(let i = 0; i < shirts.length; i++){
        if(shirts[i] === 's'){
            small.push(shirts[i])
        } else if(shirts[i] === 'm'){
            med.push(shirts[i])
        } else if(shirts[i] === 'l'){
            large.push(shirts[i])
        }
    }
    small = small.join('')
    med = med.join('')
    large = large.join('')
    sorted = [small, med, large]
    sorted = sorted.join('')
    return sorted
}

console.log(shirtSorter('ssmlllmlllmsssmlsms'))