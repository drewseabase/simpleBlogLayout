var addTwoNumbers = function(l1,l2){

    class Node{
        constructor(data){
            this.data = data;
            this.next = null;
        }
    }

    class LinkedList {
        constructor(){
            this.head = null;
            this.next = null;
        }

        append(data){
            const newNode = new Node(data);

            if(!this.head){
                this.head = newNode;
                this.tail = newNode;
            }else{
                this.tail.next = newNode;
                this.tail = newNode;
            }
        }

        traverse(){
            let current = this.head;
            while(current !== null){
                console.log(current.data);
                current = current.next;
            }
        }

    }

    let list = new LinkedList();

    for(let i = l1.length - 1; i >= 0; i--){
        list.append(l1[i]);
    }
    for(let j = l2.length - 1; j >= 0; j--){
        list.append(l2[j]);
    }

    list.traverse();


};

let l1 = [2,4,3];
let l2 = [5,6,4];

addTwoNumbers(l1, l2);


