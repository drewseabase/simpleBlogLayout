function duplicates(array){
  let item = new Set();
  let duplicate = [];
  
  for(let i = 0; i < array.length; i++){
    if(item.has(array[i]) && !duplicate.includes(array[i])){
      duplicate.push(array[i]);  
    }else{
      item.add(array[i]);
  };
 }
  return duplicate;
}


let array = ["x","x","y","y","x"];
console.log(duplicates(array));