const matrix = ['ABC','123'];
const transpose = [];
let finalArray = [];
for (let col = 0; col < matrix[0].length; col++){
    transpose[col] = [];
    for(let row = 0; row < matrix.length; row++){
        transpose[col][row] = matrix[row][col] ?? " ";
    }
}

for (let i = 0; i < transpose.length; i++){
    finalArray.push(transpose[i].join(""));
}

console.log(finalArray);


