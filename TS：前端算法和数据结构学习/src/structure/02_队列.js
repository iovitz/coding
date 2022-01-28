
class Queue {
  constructor() {
    this.items = []
  }
  enqueue(item) {
    return this.items.push(item)
  }
  dequeue() {
    return this.items.shift()
  }
  front() {
    return this.items[0]
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
  toString() {
    let resultString = ''
    this.items.forEach(item => {
      resultString += item + ' ';
    })
    return resultString
  }
}

// 击鼓传花
function passGame (nameList, num) {
  let queue = new Queue(),
    count = 0;
  nameList.forEach(item => queue.enqueue(item));
  while(queue.size() > 1) {
    count ++;
    if(count === num) {
      queue.dequeue()
      count = 0;
    } else {
      queue.enqueue(queue.dequeue());
    }
  }
  return queue.front()
}
let result = passGame(
  ['1', '2', '3', '4', '5'], 3
)
console.log(result)