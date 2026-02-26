function toRoman(number){
   let numeral = {'M': 1000,'CM': 900, 'D': 500,'CD':400, 'C': 100,'XC':90, 'L': 50,'XL':40, 'X': 10,'IX': 9, 'V': 5,'IV': 4, 'I': 1};
   let destinedNum = number;
   let romanNumeral = '';

   while (destinedNum > 0){
      for(let num in numeral){

        if(numeral[num] <= destinedNum){
            romanNumeral += num;
            destinedNum -= numeral[num];
            break;
        }
      }
   }

   return romanNumeral;
   
   
}

let number = 9;
console.log(toRoman(number));