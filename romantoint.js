var romanToInt = function(s){
    let numeral = {'M': 1000,'D': 500,'C': 100,'L': 50,'X': 10,'V': 5,'I': 1};
    let destinedNum = s;
    let finalNum = 0;
    let count = 0;
    

    while(count <= destinedNum.length){
        let current = numeral[s];
        let next = numeral[s + 1];
        count++;
        console.log(current, next);
    }

    for(let letter = 0; letter <= destinedNum.length; letter++){
        let current = numeral[s[letter]];
        let next = numeral[s[letter + 1]];

        if(!next){
            finalNum += current;
            break;
        }
        
        if (current < next){
            finalNum -= current;
        }else{
            finalNum += current;
        }
    }
    return finalNum;
}

let s = 'VIXIII';
console.log(romanToInt(s));