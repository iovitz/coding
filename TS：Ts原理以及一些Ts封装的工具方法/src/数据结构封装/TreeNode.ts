class TreeNode<T = number> {
  // 树节点的右节点
  public left: TreeNode<T> | null

  // 数节点的右节点
  public right: TreeNode<T> | null

  constructor(public val: T) {
    this.left = null
    this.right = null
  }
}

export default TreeNode
