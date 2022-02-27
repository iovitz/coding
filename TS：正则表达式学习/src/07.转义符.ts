const htmlReg = /https?:\/\/\w+\.\w+\.\w+/

/**
 * 一个字符在正则中有特殊的意义时候，
 * 如果需要把它当做普通字符需要转义
 */

console.log(htmlReg.test('http://www.baidu.com'))
console.log(htmlReg.test('https://www.baidu.com'))
console.log(htmlReg.test('https://wwwbaidu.com'))

export default {}
