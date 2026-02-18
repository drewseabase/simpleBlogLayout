var hasAlternatingBits = function(n){
    let binary = n.toString(2);
    let isAlt = 0;
    
    for (let i = 0; i < binary.length - 1; i++){
       
      if(binary[i] === binary[i + 1]){
        isAlt++;
      }
    }

    if(isAlt > 0){
        return false;
    }else{
        return true;
    }
};

let n = 10;
console.log(hasAlternatingBits(n));