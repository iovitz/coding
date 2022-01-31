import TreeNode from './TreeNode'

export class BinarySearchTree<T = number> {
  public root: TreeNode<T> | null = null

  /**
   * 插入元素
   */
  insert(value: T) {
    const treeNode = new TreeNode(value)

    if (!this.root) {
      this.root = treeNode
    } else {
      this.insertNode(this.root, treeNode)
    }
  }

  /**
   * 删除树中的某个元素
   */
  remove() {}

  protected insertNode(root: TreeNode<T>, treeNode: TreeNode<T>) {
    if (treeNode.val < root.val) {
      if (root.left === null) {
        root.left = treeNode
      } else {
        this.insertNode(root.left, treeNode)
      }
    } else {
      if (root.right === null) {
        root.right = treeNode
      } else {
        this.insertNode(root.right, treeNode)
      }
    }
  }

  /**
   * 前序遍历二叉树
   * @param handler 处理节点值的回调函数
   */
  preOrderTraversal(handler: (val: T) => void) {
    helper(this.root)

    function helper(root: TreeNode<T> | null) {
      if (!root) return
      handler(root.val)
      root.left && helper(root.left)
      root.right && helper(root.right)
    }
  }

  /**
   * 中序遍历二叉树
   * @param handler 处理节点值的回调函数
   */
  midOrderTraversal(handler: (val: T) => void) {
    helper(this.root)

    function helper(root: TreeNode<T> | null) {
      if (!root) return
      root.left && helper(root.left)
      handler(root.val)
      root.right && helper(root.right)
    }
  }

  /**
   * 后序遍历二叉树
   * @param handler 处理节点值的回调函数
   */
  postOrderTraversal(handler: (val: T) => void) {
    ;(function helper(root: TreeNode<T> | null) {
      if (!root) return
      root.left && helper(root.left)
      root.right && helper(root.right)
      handler(root.val)
    })(this.root)
  }

  /**
   * 获得二叉搜索数中的最大值
   * @returns 二叉搜索树中的最大值
   */
  getMax(): T {
    let root = this.root
    if (!root) throw new Error('Empty Tree')
    let max: T = root.val
    root = root.right
    while (root) {
      max = root.val
      root = root.right
    }
    return max
  }

  /**
   * 获得二叉搜索数中的最小值
   * @returns 二叉搜索树中的最小值
   */
  getMin(): T {
    let root = this.root
    if (!root) throw new Error('Empty Tree')
    let min: T = root.val
    root = root.left
    while (root) {
      min = root.val
      root = root.left
    }
    return min
  }

  /**
   * 查找数中是否存在某个值
   */
  search(val: T) {
    let root = this.root
    if (!root) return false
    while (root !== null) {
      if (root.val > val) {
        root = root.left
      } else if (root.val < val) {
        root = root.right
      } else {
        return true
      }
    }
    return false
  }
}

const bst = new BinarySearchTree()

bst.insert(1)
bst.insert(-39)
bst.insert(0)
bst.insert(-25)
bst.insert(8)
bst.insert(28)
bst.insert(12)
bst.insert(3)

let str = ''
bst.postOrderTraversal(function (val) {
  str += val + ', '
})

console.log(str)
console.log(bst.getMax())
console.log(bst.getMin())

console.log(bst.search(3), bst.search(13))
