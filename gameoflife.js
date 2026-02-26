class GameOfLife{
    constructor(matrix){
        this.matrix = matrix;
    }

    tick(){
        return this.matrix;
    }
}

let matrix = [[0,0,0], [0,1,0],[0,0,0]]
const game = new GameOfLife(matrix);

console.log(game.tick());