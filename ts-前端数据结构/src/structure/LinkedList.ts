// 链表数据结构
export default class LinkedList<T = any> {

  public next: LinkedList<T> | null

  constructor(public value: T, next?: LinkedList<T>) {
    this.next = next || null
  }

}
