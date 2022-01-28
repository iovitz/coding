let PriorityQueue = (function() {

  class QueueElement {
    element: any
    priority: any
    constructor(element, priority) {
      this.element = element
      this.priority = priority
    }
  }
  class PriorityQueue {
    constructor() {
      // 内部类
    }
    enqueue(element, priority) {
      let queue = new QueueElement(element, priority);
    }
  }
})