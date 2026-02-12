class DiffieHellman{
    constructor(p,g){
        this.p = p;
        this.g = g;
    }

    getPublicKey(privateKey){
        this.a = p;
        this.b = p;
    }
}

const test = new DiffieHellman(10,999);
const result = test.getPublicKey(test);
