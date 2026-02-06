function cookingStatus(remainingTime){
    let timeWait = '';

    if(remainingTime === undefined){
        timeWait = 'You forgot to set the timer';
    }else{
    remainingTime === 0 ? timeWait = 'Lasagna is done' : timeWait = 'Not done, please wait';
    }

    return timeWait;
}

function preparationTime(layers, time){

    if(time === undefined){time = 2;}
    let num = layers.length;
    let calc = num * time;
   
    return calc;
}

function quantities(layers){
    let quantity = {noodles: 0, sauce: 0};

    for(let i = 0; i < layers.length; i++){
        
        if(layers[i] === 'noodles') quantity[layers[i]] = (quantity[layers[i]] || 0) + 50;
        if(layers[i] === 'sauce') quantity[layers[i]] = (quantity[layers[i]] || 0) + 0.2;
            
    }
   
    return quantity;
}

function addSecretingredient(friendsList, myList){
    let element = friendsList[friendsList.length - 1];
    myList.push(element);
    return myList;

}

function scaleRecipe(recipe, numPortions){
    let people = numPortions / 2;
    let portions = {};
    for(const name in recipe){
        const newKey = name;
        portions[newKey] = recipe[name] * people;
    }
    return portions;
}

let remainingTime = '';
let layers = ['sauce', 'noodles', 'sauce', 'meat', 'cheese', 'noodles'];
const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];
const myList = ['noodles', 'meat','sauce','mozzarella'];
let time = 3;
const recipe = {noodles: 200, sauce: 0.5, mozzarella: 1, meat: 100};
let numPortions = 4;
console.log(cookingStatus(remainingTime))
console.log(preparationTime(layers, time));
console.log(quantities(layers));
console.log(addSecretingredient(friendsList,myList));
console.log(scaleRecipe(recipe, numPortions));