class DiffieHellman{
    constructor(p,g){
        this.p = p;
        this.g = g;
    }
    
}

const test = new DiffieHellman(10,999);
console.log(test.p);
console.log(test.g);
