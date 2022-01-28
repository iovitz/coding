
class Stack {
  constructor() {
    this.items = [];
  }
  push (item) {
    return this.items.push(item)
  }
  pop () {
    return this.items.pop()
  }
  peek () {
    return this.items[this.items.length - 1]
  }
  isEmpty () {
    return this.items.length === 0
  }
  size () {
    return this.items.length
  }
  toString () {
    let resultString = ''
    this.items.forEach(item => resultString += item + ' ');
    return resultString;
  }
}

// 十进制转二进制
function dec2bin (decNumber) {
  let stack = new Stack();
  while(decNumber) {
    stack.push(decNumber % 2)
    decNumber = Math.floor(decNumber / 2);
  }
  let binaryString = '';
  while(!stack.isEmpty()) {
    binaryString += stack.pop()
  }
  return binaryString;
}

console.log(dec2bin(8))

