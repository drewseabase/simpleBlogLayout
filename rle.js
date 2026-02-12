function encode(str){
   let myMap = new Map();
   let split = str.split('');
   

   for(let item of split){
    if(myMap.has(item)){
        myMap.set(item, myMap.get(item) + 1);
    }else{
        myMap.set(item, 1);
    } 
   }

   return myMap;
}

let str = 'WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB';
console.log(encode(str));