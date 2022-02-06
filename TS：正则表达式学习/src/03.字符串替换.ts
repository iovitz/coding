const reg = /l/g

let str = 'hello, world'

console.log(str.replace(reg, char => {
  return `<span style="color: red">${char}</span>`
}))
