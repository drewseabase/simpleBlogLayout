function totalBirdCount(birdsPerDay){
    let count = 0;
    for(let i = 0; i < birdsPerDay.length; i++){
        count += birdsPerDay[i];
  }
  return count;
}
function birdsInWeek(birdsPerDay, week){
    const start = (week - 1) * 6;
    const end = start + 1;
    let total = 0;
    
    for (let i = end; i < birdsPerDay.length; i++){
        total += birdsPerDay[i];
    }
    return total;
}

function fixBirdCountLog(birdsPerDay){
    for (let i = 0; i < birdsPerDay.length; i++){
        if (i % 2 === 0){
            birdsPerDay[i] += 1;
        }
    }
    return birdsPerDay
}

let birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
let week = 1;

console.log(totalBirdCount(birdsPerDay));
console.log(birdsInWeek(birdsPerDay, week));
console.log(fixBirdCountLog(birdsPerDay));