
/**
 * g: 全局匹配
 * i: 不区分大小写
 */

const reg1 = /u/g
const reg2 = /u/gi

console.log('Unique'.match(reg1))
console.log('Unique'.match(reg2))

const str = `
  #1 js,200元 #
  #2 php,200元 #
  #4 hahaha #
  #7 node,200元 #
`

console.log(
  str.match(/#\d \w+,\d+元 #/gm)
)

const numbers = '#1111, 2222, 3333#'
const reg = /\d+,?\s?/y
reg.lastIndex = 1

console.log(numbers.match(reg))
console.log(numbers.match(reg))
console.log(numbers.match(reg))

export default {}
