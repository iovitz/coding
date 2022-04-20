/**
 * 优先级队列中的成员
 */
class PriorityQueenMember<M> {
  /**
   * 创建一个优先级队列的成员
   * @param member 队列成员的值
   * @param priority 优先级
   */
  constructor(public member: M, public priority: number) {}
}

export default PriorityQueenMember
