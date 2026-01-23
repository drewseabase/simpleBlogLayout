const currentDate = new Date();
const laterDate = 10 ** 9;
let testNumber = 31536000;
//Solving this tomorrow w fully thinking
let year = laterDate / testNumber;
let wholeYear = Math.floor(year);
let fractionalYear = year - wholeYear;

console.log(currentDate.getFullYear());
console.log(wholeYear + currentDate.getFullYear());
console.log(fractionalYear);