// 链表数据结构
export default class LinkedList<T = any> {
  constructor (
    public value?: T,
    public next?: LinkedList<T>
  ) {
    console.log('22')
  }
}
