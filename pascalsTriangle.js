function rows(number){
    const triangle = [];

    if (number === 0) return triangle;

    triangle.push([1]);

    for(let row = 1; row < number; row++){
        const previousRow = triangle[row - 1];
        const newRow = [1];

        for(let i = 0; i < previousRow.length - 1; i++){
            const sum = previousRow[i] + previousRow[i+1];
            newRow.push(sum);
        }

        newRow.push(1);

        triangle.push(newRow);
    }

    return triangle;

}

let number = 9;
console.log(rows(number));