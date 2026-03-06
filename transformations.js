function seeingDouble(deck){
    return deck.map((value) => value * 2);
}
function threeOfEachThree(deck){
   
    return deck.reduce((acc, card) => {
        if(card === 3){
            acc.push(3,3,3);
        }else{
            acc.push(card);
        }
        return acc;
    }, [])

}

function middleTwo(deck){
    return deck.slice(4,6);
}

function sandwichTrick(deck){
    let first = deck[0];
    let last = deck[deck.length - 1];
    let middle = Math.floor(deck.length / 2);

    return deck.reduce((acc, card, index)=> {
  
        if(index === middle){
            acc.push(last, first);
        }
        if (index !== 0 && card !== deck.length - 1){
            acc.push(card);
        }
        return acc;
    }, []);
}

let deck = [10,5,9,4,7,9,3,1,2,6];
console.log(seeingDouble(deck));
console.log(threeOfEachThree(deck));
console.log(middleTwo(deck));
console.log(sandwichTrick(deck));