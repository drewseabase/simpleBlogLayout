function isLeap(year){
  
return year % 400 === 0 ? true :  year % 100 === 0 ? false : year % 4 === 0;
}

let year = 2100;
console.log(isLeap(year));