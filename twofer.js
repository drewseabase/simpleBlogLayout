function twofer(name){
    if(name){
        return `One for ${name}, one for me`;
    }else{
    return `One for you, one for me`;
    }
}
let name = '';
console.log(twofer(name));