
let DoublyLinkedList = (function() {

  class Node {
    data: any
    prev: object
    next: object
    constructor(data=null) {
      this.data = data;
      this.prev = null
      this.next = null
    }
  }

  class DoublyLinkedList {
    head: object
    tail: object
    length: number
    constructor() {
      this.head = new Node()
      this.tail = this.head
      this.length = 0
    }

    append(data) {
      let newNode = new Node(data)
      if(this.length === 0) {
        this.head.next = newNode
      } else {
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
      }
      return ++this.length
    }

    toString() {
      let
        carrent = head.next,
        resultString = ''
      while(carrent) {
        resultString += carrent.data + ' '
        carrent = carrent.next
      }
    }
  }


  return DoublyLinkedList
}())

console.log(DoublyLinkedList.prototype.append.toString())