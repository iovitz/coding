
let LinkedList = (function() {

  class Node {
    data: any
    next: object
    constructor(data) {
      this.data = data;
      this.next = null
    }
  }

  class LinkedList {
    head: object
    length: number
    constructor() {
      this.head = null
      this.length = 0
    }

    append(data) {
      if(this.length === 0) {
        this.head = new Node(data)
      } else {
        let newNode = new Node(data)
        let current = this.head
        while(current.next) {
          current = current.next
        }
        current.next = newNode
      }
      this.length += 1
    }
    insert(position, data) {
      if(position < 0 || position > this.length) return false
      let newNode = new Node(data);
      if(position === 0) {
        newNode.next = this.head
        this.head = newNode
      } else {
        let index = 0, current = this.head
        while(++index < position) {
          current = current.next
        }
        newNode.next = current.next
        current.next = newNode
      }
      this.length += 1
      return true
    }
    update(position, newDate) {
      if(position < 0 || position >= this.length) return false
      this.get(position).data = newDate

    }
    removeAt(position) {
      if(position < 0 || position >= this.length) return false
      if(position === 0) {
        this.head = this.head.next
      } else {
        let current = this.head
        while(--position) {
          current = current.next
        }
        current.next = current.next.next
      }
      this.length -= 1
      return true
    }
    remove(data) {
      let index = this.indexOf(data);
      return this.removeAt(index)
    }
    get(position) {
      if(position < 0 || position > this.length) return null
      let current = this.head
      while(position--) {
        current = current.next
      }
      return current
    }
    indexOf(data) {
      let current = this.head, index = -1;
      while(current) {
        index++;
        if(current.data === data) {
          return index;
        }
        current = current.next
      }
      return -1;
    }

    toString() {
      let
        current = this.head,
        resultString = ''
      while(current) {
        resultString += current.data + ' '
        current = current.next;
      }
      return resultString;
    }
    size() {
      return this.length
    }
    isEmpty() {
      return this.length === 0
    }

  }

  return LinkedList
}())


