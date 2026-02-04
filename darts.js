function score(x,y){
    const distance = Math.sqrt((x**2) + (y**2));
    let num = 0;
    if(distance <= 1){
        num += 10;
    }else if(distance <= 5){
        num += 5
    }else if (distance <=10){
        num += 1
    }
    return num;
}

let x = 0;
let y = 0;
console.log(score(x,y));