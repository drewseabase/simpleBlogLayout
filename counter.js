/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let array = [];
    return function() {
      array.push(n);
      n++;
      return [...array];
    };
};

 
const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12
