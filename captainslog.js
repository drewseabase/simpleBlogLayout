function randomShipRegistryNumber(max, min){
    let prefix = 'NCC-';
    let calc = String(Math.floor(Math.random() * (min - max + 1) + max));

    return prefix + calc;
}

function randomStarDate(floor, ceil){
    return floor + Math.random() * (ceil - floor);
}

function randomPlanetClass(planets){
    let calc = Math.floor(Math.random() * (0 + 10));
    return planets[calc];
}


let max = 9999
let min = 1000
let floor = 41000.0
let ceil = 42000.0;
let planets = ['D','H','J','K','L','M','N','R','T','Y'];
console.log(randomShipRegistryNumber(max, min));
console.log(randomStarDate(floor,ceil))
console.log(randomPlanetClass(planets));