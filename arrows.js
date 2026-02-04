function anyArrows(arrows){
    let isDamaged;

    if(arrows.length === 0){
        isDamaged = false;
    }else if (arrows.length >= 1){
        for(let key = 0; key < arrows.length; key++){
            if(!arrows[key].damaged){
                isDamaged = true;
            }else if (arrows[key].damaged && !isDamaged){
                isDamaged = false;
            }
        }
    }

    return isDamaged;
}

let arrows = [];
console.log(anyArrows(arrows));