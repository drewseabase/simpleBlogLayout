function getFirstCard(deck){
    const [first] = deck;
    return first;
}
function getSecondCard(deck){
    const [first, second] = deck;
    return second;
}
function swapTwoCards(deck){
    const [first, second] = deck;
    return [second, first];
}
function shiftThreeCardsAround(deck){
    const [first, second, third] = deck;
    return [second, third, first];
}
function pickNamedPile(piles){
    const {deck} = piles;
    return deck;
}
function swapNamedPile(piles){
    let {deck, disregard} = piles;
    [deck, disregard] = [disregard, deck];
    console.log(disregard, deck);
}

const deck = [5,9,7,1,8];
const disregard = [7,10];
let piles = {deck, disregard};
console.log(getFirstCard(deck));
console.log(getSecondCard(deck));
console.log(swapTwoCards(deck));
console.log(shiftThreeCardsAround(deck));
console.log(pickNamedPile(piles));
console.log(swapNamedPile(piles));
