function age(planet, num){
    const earthSeconds = 31557600;
    let calc = num / earthSeconds;
    let newCalc;
    
    switch(planet){
        case 'earth':
            newCalc = Math.round(calc * 100) / 100;
            break;
        case 'mercury':
            newCalc = Math.round((calc / 0.2408467) * 100) / 100;
            break;
        case 'venus':
            newCalc = Math.round((calc / 0.61519726) * 100) / 100;
            break;
        case 'mars':
            newCalc = Math.round((calc / 1.8808158) * 100) / 100;
            break;
        case 'jupiter':
            newCalc = Math.round((calc / 11.862615) * 100) / 100;
            break;
        case 'saturn':
            newCalc = Math.round((calc / 29.447498) * 100) / 100;
            break;
        case 'uranus':
            newCalc = Math.round((calc / 84.016846) * 100) / 100;
            break;
        case 'neptune':
            newCalc = Math.round((calc / 164.79132) * 100) / 100;
            break;
        default:
            throw new Error('not a planet');
    }

    return newCalc;
    
}
let planet = 'sun'
let num = 680804807;
console.log(age(planet,num));