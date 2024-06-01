
class node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertdata(value){
        const newNode = new node(value);
        if(this.head == null){
            this.head = newNode;
        } else {
            let curr = this.head;
            while(curr.next != null){
                curr = curr.next;
            }
            curr.next = newNode;
        }
    }

    deleteFrombegning(){
        
    }

    deletefromend(){

    }

    insertAtPos(){

    }

    reverselist(){

    }

    findMiddle(){

    }

    nthFromLast(){
        // using calcualted the last from end
        // using two pointer, put slow at 0 and fast as nth from first
    }

    print() {
        let curr = this.head;
        while(curr){
            console.log(curr.data);
            curr = curr.next;
        }
    }
}

const ll = new linkedList();
ll.insertdata(10);
ll.insertdata(20);
ll.insertdata(30);
ll.insertdata(40);
console.log(ll);
ll.print();


