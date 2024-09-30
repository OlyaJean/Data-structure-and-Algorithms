
  let stack = [];
  
  stack.push('fist');
  stack.push('second');
  stack.push('third');
  stack.pop();
  
  console.log(stack);
  
  
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
 
  console.log(myQueue);