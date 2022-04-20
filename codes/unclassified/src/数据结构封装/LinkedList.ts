// 链表数据结构
class LinkedListNode<T> {
  constructor (
    public value: T,
    public next: LinkedListNode<T> | null = null
  ) {}
}

export class LinkedList<T> {
  public size = 0

  constructor(
    private head: LinkedListNode<T> | null = null
  ) {}

  clear() {

  }

  indexOf() {}
}
  