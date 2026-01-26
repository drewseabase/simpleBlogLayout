function findAnagrams(word, wordArray){
  let count = 0
  let newWord = word 
  .toLowerCase()
  .split("")
  .sort()
  .join("");

  for(let i = 0; i < wordArray.length; i++){
    wordArray[i] = wordArray[i]
    .toLowerCase()
    .split("")
    .sort()
    .join("");

    if (newWord === wordArray[i]){
      count++;
    }
  }

   if (count > 0){
        return true;
    }else{
        return false;
    }
};

let word = 'ΑΒΓ';
let wordArray = ['ΒΓΑ', 'ΒΓΔ', 'γβα', 'αβγ'];

console.log(findAnagrams(word, wordArray));