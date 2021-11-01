const printDigits = num => {
    let lastDigit = 0;
    let reverse = 0;

    while (num > 0){
        reverse = (reverse * 10);
        lastDigit = num % 10;
        num = (num - lastDigit) / 10;
        reverse += lastDigit
    }
    num.toString(reverse);
    // reverse.split("")

    for(let x = 0; x < reverse.length; x++){
        console.log(reverse[x])
    }
}

printDigits(276)