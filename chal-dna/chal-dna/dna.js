const completeDNA = rna => {
    rna.split('')
    let otherSide = []
    for(let i = 0; i < rna.length; i++){
        if(rna[i] === 'A'){
            otherSide.push('T')
        } else if(rna[i] === 'T'){
            otherSide.push('A')
        } else if(rna[i] === 'C'){
            otherSide.push('G')
        } else if(rna[i] === 'G'){
            otherSide.push('C')
        }
    }
    return otherSide.join('')
}

console.log(completeDNA('ATGCCAGTCTGG'))