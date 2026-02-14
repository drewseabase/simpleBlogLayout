function encode(str){
   let myArr = [];
   let count = 1;

   for(let i = 0; i < str.length; i++){
    if(str[i] === str[i + 1]){
        count ++;
        
    }else{
        myArr.push(count > 1 ? `${count}${str[i]}` : `${str[i]}`);
        count = 1;
    }
   }
  
   return myArr.join('');
}
function decode(str){
    let num = 1;
    let finalStr = '';

    for(let i = 0; i < str.length; i++){
        if(/^\d/.test(str[i]) && /^\d/.test(str[i+1])){
            num = Number(str[i] + str[i + 1]);
            i++
        }else if( /^\d/.test(str[i])){
            num = Number(str[i]);
        }else{
            finalStr += str[i].repeat(num);
            num = 1;
        }
    }

    return finalStr;
}


let str = 'AABBBCCCC';
let otherStr = '2 hs2q q2w2';
console.log(encode(str));
console.log(decode(otherStr));
