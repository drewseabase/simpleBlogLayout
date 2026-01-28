function format(number){
    const mod = number % 100;

    if(mod >= 11 && mod <= 13){
        return number + 'th';
    }

    switch(number % 10){
        case 1: return number + 'st';
        case 2: return number + 'nd';
        case 3: return number + 'rd';
        default: return number + 'th';
    }
}

let number = 2011;
console.log(format(number));