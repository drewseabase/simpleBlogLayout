function caesarCipher(text, shift) {
  shift = ((shift % 26) + 26) % 26; // handles big/negative shifts safely
  let out = "";

  for (let i = 0; i < text.length; i++) {
    const c = text.charCodeAt(i);

    // A-Z
    if (c >= 65 && c <= 90) {
      out += String.fromCharCode(((c - 65 + shift) % 26) + 65);
    }
    // a-z
    else if (c >= 97 && c <= 122) {
      out += String.fromCharCode(((c - 97 + shift) % 26) + 97);
    }
    // punctuation/space
    else {
      out += text[i];
    }
  }

  return out;
}


let phrase = 'a';
let number = 1
console.log(caesarCipher(phrase, number));