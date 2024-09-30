//Data structure and algorithms

  let stack = [];
  
  stack.push('fist');
  stack.push('second');
  stack.push('third');
  stack.pop();
  stack.length();
  /* 

1.Stack data structure. LIFO method. Last in, First out.

Stack of books.You cant reach the first book you put, until you remove the rest of them.
 */
  console.log(stack);//first,second
  
  


  /*Queue data structure. FIFO method. First in, First out.

Like a line art the cash register. It's a linear data structure. */
  class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element) {
      this.queue.push(element);
    }
    dequeue(element){
        this.queue.shift(element)
    }


  }
  let myQueue = new Queue()
  myQueue.enqueue('first');
  myQueue.enqueue('second');
  myQueue.enqueue('third');

  myQueue.dequeue();
 
  console.log(myQueue);//second,third