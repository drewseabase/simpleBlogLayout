function timeToMixJuice(name) {
  switch(name){
    case ('Pure Strawberry Joy'):
      return 0.5;
      break; 
    case ('Energizer'):
      return 1.5;
      break;
    case ('Green Garden'):
      return 1.5;
      break;
    case ('Tropical Island'):
      return 3;
      break;
    case ('All or Nothing'):
      return 5;
      break;
    default:
      return 2.5;
  }
}

function remainingOrders(timeLeft, orders) {
 
    let remainingTime = 0;

  if(timeLeft === 0) return orders;
  
  for (let i = 0; i < orders.length; i++){
    let timeToMix = timeToMixJuice(orders[i]);

    if(remainingTime < timeLeft){
      remainingTime += timeToMix;
    }else{
      let lastOrders = orders.splice(i);
      return lastOrders;
    }
}
}

let timeLeft = 15;
let orders = ['Tropical Island','Energizer','LimeTime','All or Nothing','Pure Strawberry Joy'];
console.log(remainingOrders(timeLeft, orders));