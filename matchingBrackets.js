function matchingBrackets(isPaired){
    
    const cleanStr = isPaired.replace(/[a-zA-Z\d\s]/g, '');
    cleanStr.split("")
    let stack = [];
    for(let char of cleanStr){
       switch(char){
        case '(':
        case '{':
        case '[':
            stack.push(char);
            break;

        case ')':
            if(stack.includes('(')){
                stack.pop('(');
            }else{
              stack.push(char);
              }
            break;
        case '}':
            if(stack.includes('{')){
                stack.pop('}');
            }else{
              stack.push(char);
            }
            break;
        case ']':
            if(stack.includes('[')){
                stack.pop(']');
            }else{
              stack.push(char);
            }
            break;
       }
    }

    if(stack.length === 0){
        return true;
    }else{
        return false;
    }
}

let isPaired = '[]';
console.log(matchingBrackets(isPaired));