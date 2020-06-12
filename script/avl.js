class Node {
    constructor (data, left = null, right = null, balance = 0) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.balance = balance;
    }
}

class AVL {
    constructor () {
        this.root = null;
    }

    insert(data) {

        // Creating a node and initailising  
        // with data  
        const newNode = new Node(data); 
         
        // if the AVL tree is empty: make this the root of the tree
        if(this.root === null) 
            this.root = newNode; 
        else
          
        
    }

}

let avl = new AVL();

let node1 = new Node(10);
let node2 = new Node(11);
let node3 = new Node(9);
let node4 = new Node(8);

avl.insert(node1);
avl.insert(node2);
avl.insert(node3);
avl.insert(node4);

console.log(avl);