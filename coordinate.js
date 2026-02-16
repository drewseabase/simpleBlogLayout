function translate2d(dx,dy){
    return function (x,y){
        return [x+dx, y + dy];
    }
}

function scale2d(sx, sy){
    return function (x,y){
        return[x * sx, y * sy];
    }
}

function composeTransform(f,g){
   return function (x,y){
    const [x1, y1] = g(x,y);
    const [x2, y2] = f(x1,y1);
    return [x2,y2];
   }
}

function memoizeTransform(f){
    let lastArgs = null;
    let lastResult = null;

    return function (x,y){
        if(lastArgs && lastArgs[0] === x && lastArgs[1] === y){
            return lastResult;
        }

        lastResult = f(x,y);

        lastArgs = [x,y];

        return lastResult;
    };
}

const moveRight2 = translate2d(0,5);
const doubleCoordinates = scale2d(2,2);
const composedTransformations = composeTransform(moveRight2, doubleCoordinates);
const tripleScale = scale2d(3,3);
const memoizedScale = memoizeTransform(tripleScale);
console.log(moveRight2(10 , 5));
console.log(doubleCoordinates(6,-3));
console.log(composedTransformations(0,1));
console.log(memoizedScale(4,3));