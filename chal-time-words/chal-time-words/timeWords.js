const timeWord = timestr => {
    let hours = ''
    let mins = ''
    const tens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }
    const tensPlace = {
        0: 'o\'',
        2: 'twenty',
        3: 'thirty',
        4: 'fourty',
        5: 'fifty',
    }
    const onesPlace = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    }
    if(timestr === '00:00'){
        return 'midnight'
    } else if(timestr === '12:00'){
        return 'midnight'
    } else {
        timestr = timestr.split(':')
        timestr[0] = Number(timestr[0])
        timestr[1] = Number(timestr[1])
        if(timestr[1] === 00){
            if(timestr[0] >= 10 && <= 12){
                hours = tens[timestr[0]]
            } else{
                hours
            }
        }
    }
}