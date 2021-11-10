const nbYear = (p0, percent, aug, p) => {
    let i = 0;
    percent = percent / 100
    while(p0 < p) {
        p0 = p0 + (p0 * percent) + aug;
        i++
    }
    return i
}

console.log(nbYear(1500, 5, 100, 5000))