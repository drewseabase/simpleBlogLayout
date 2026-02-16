function buildSign(occasion, name){
    return `Happy ${occasion} ${name}!`
}

function buildBirthdaySign(age){
    
    age >= 50 ? word = 'mature' : word = 'young';
    let phrase = `Happy Birthday! What a ${word} fellow you are.`
    return phrase;
}
function graduationFor(names,year){
    return `Congratulations ${names}!
        Class of ${year}`;
}

function costOf(sign, currency){
    let base = 20;

    for (let i = 0; i < sign.length; i++){
        base += 2;
    }
    return `Your sign costs ${base}.00 ${currency}.`;
}

let occasion = 'Birthday';
let names = 'Rob';
let age = 45;
let year = 2022;
let sign = 'Happy Birthday Rob!';
let currency = 'dollars';

console.log(buildSign(occasion, names));
console.log(buildBirthdaySign(age));
console.log(graduationFor(names,year))
console.log(costOf(sign, currency));