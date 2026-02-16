function getListOfWagons(...wagonIds){
    return wagonIds;
}

function fixListOfWagons(ids){
    const [first, second, ...rest] = ids;
    const result = [...rest, first, second];
    return result;
}

function correctListOfWagons(id, missingWagons){
    
    const [first, ...rest] = id;
    const finalResult = [first, ...missingWagons, ...rest];
   
    return finalResult;
}

function extendRouteInformation(route, moreRouteInformation){
    let routes = route;
    routes = {...routes, ...moreRouteInformation};
    return routes;
    
}

function separateTimeOfArrival(routeInformation){
    const {timeOfArrival, ...rest} = routeInformation;
    const result = [timeOfArrival, {...rest}];
    return result;

}

let eachId = [2,5,1,7,4];
let missingWagons = [3,17,6,15];
let route = {from: 'Berlin', to: 'Hamburg'};
let moreRouteInformation = {length: '100', speed: '50'};
let routeInformation = {from: 'Berlin', to: 'Hamburg', length: '100', timeOfArrival: '10:10'};
console.log(getListOfWagons(eachId));
console.log(fixListOfWagons(eachId));
console.log(correctListOfWagons(eachId, missingWagons));
console.log(extendRouteInformation(route, moreRouteInformation));
console.log(separateTimeOfArrival(routeInformation));