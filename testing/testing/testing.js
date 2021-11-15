const tower = num => {
    let tree = []
    for(let i = 0; i < num; i++){
        let row = []
        let t = 0
        while(t < i + 1){
          row.push('*') 
          if(t > 0){
              row.push('*') * ((i + 1) * 2)
          }
          t++
        }
        let s = num - i - 1
        while(s > 0){
            row.push(' ')
            row.unshift(' ')  
            s--
          }
        row = row.join('')
        tree.push(row)
    }
    return tree
}

console.log(tower(6))