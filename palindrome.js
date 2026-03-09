function palindrome(value){
    let strNum = String(value);
    let first = 0;
    let last = strNum.length - 1;

    while(first < last){
        if(strNum[first] != strNum[last]){
            return false;
        }

        first += 1;
        last -= 1;
    }

    return true;
    
}

let value = -121;
console.log(palindrome(value));