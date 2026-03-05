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
swapNamedPile(piles);


function getCardPosition(stack, card){
     return stack.findIndex((value) => value === card);
}
function doesStackIncludeCard(stack, card){
    return stack.includes(card);
}
function isEachCardEven(stack){
    return stack.every((value) => value % 2 === 0);
}
function doesStackIncludeOddCard(stack){
    return stack.some((value) => value % 2 !== 0);
}
function getFirstOddCard(stack){
    return stack.find((value) => value % 2 !== 0);
}
function getFirstEvenCardPosition(stack){
    return stack.findIndex((value) => value % 2 === 0);
}

const stack = [9,7,3,2];
const card = 2;
console.log(getCardPosition(stack, card));
console.log(doesStackIncludeCard(stack,card));
console.log(isEachCardEven(stack));
console.log(doesStackIncludeCard(stack));
console.log(getFirstOddCard(stack));
console.log(getFirstEvenCardPosition(stack));